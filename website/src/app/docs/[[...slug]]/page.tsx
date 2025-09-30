import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page'
import { notFound } from 'next/navigation'
import { components } from '#/components'
import { source } from '#/lib/source'

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (!page) notFound()

  // Hide title and description for pages that don't need them
  const pageWithoutTitle: string[] = []

  const MDX = page.data.body
  const lastUpdate = page.data.lastModified

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      footer={{ enabled: true }}
      lastUpdate={lastUpdate ? new Date(lastUpdate) : undefined}
      editOnGithub={{
        owner: 'riipandi',
        repo: 'twistail',
        sha: 'main',
        path: `website/src/content/docs/${page.file.path}`,
      }}
    >
      {pageWithoutTitle.includes(page.url.replace('/docs/', '')) ? null : (
        <>
          <DocsTitle>{page.data.title}</DocsTitle>
          <DocsDescription>{page.data.description}</DocsDescription>
        </>
      )}
      <DocsBody>
        <MDX components={components} />
      </DocsBody>
    </DocsPage>
  )
}
export async function generateStaticParams() {
  const sourceParams = source.generateParams()
  return [
    // Add parameter for the base /docs route (without slug)
    { slug: [] }, // Adding parameter for /docs route
    ...sourceParams, // Existing parameters
  ]
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>
}) {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (!page) notFound()

  return {
    title: page.data.title,
    description: page.data.description,
  }
}
