import * as fs from 'node:fs/promises'
import fg from 'fast-glob'
import { remarkInclude } from 'fumadocs-mdx/config'
import matter from 'gray-matter'
import { join, resolve } from 'pathe'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkMdx from 'remark-mdx'
import remarkStringify from 'remark-stringify'

export const revalidate = false

export async function GET() {
  const cwd = resolve(process.cwd(), 'src/content/docs')
  const files = await fg.glob(
    [
      '**/*.mdx',
      '!contributing-guidelines.mdx',
      '!contributors.mdx',
      '!llms.mdx',
    ],
    {
      cwd,
      onlyFiles: true,
    }
  )

  const scan = files.map(async (file) => {
    const fileContent = await fs.readFile(join(cwd, file))
    const { content, data } = matter(fileContent.toString())
    const processed = await processContent(content)
    return `file: docs/${file}\nmeta: ${JSON.stringify(data, null, 2)}\n\n${processed}`
  })

  const scanned = await Promise.all(scan)

  return new Response(scanned.join('\n\n'))
}

async function processContent(content: string): Promise<string> {
  const file = await remark()
    .use(remarkMdx)
    // https://fumadocs.vercel.app/docs/mdx/include
    .use(remarkInclude)
    // gfm styles
    .use(remarkGfm)
    // .use(your remark plugins)
    .use(remarkStringify) // to string
    .process(content)

  return String(file)
}
