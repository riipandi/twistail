'use client'

import type { SharedProps } from 'fumadocs-ui/components/dialog/search'
import * as Lucide from 'lucide-react'
import { useRouter } from 'next/navigation'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from 'twistail-react/command'

type LinkItem = [string, string]

type LinkGroup = {
  name: string
  icon: typeof Lucide.Component
  items: LinkItem[]
}

const LINKS: LinkGroup[] = [
  {
    name: 'Getting Started',
    icon: Lucide.BookOpen,
    items: [
      ['Documentation', '/docs'],
      ['Installation', '/docs/install'],
      ['Theming', '/docs/theming'],
      ['Changelog', '/docs/changelog'],
      ['Twistail CLI', '/docs/cli'],
    ],
  },
  {
    name: 'Base Components',
    icon: Lucide.Component,
    items: [
      ['Accordion', '/docs/components/accordion'],
      ['Alert Dialog', '/docs/components/alert-dialog'],
      ['Aspect Ratio', '/docs/components/aspect-ratio'],
      ['Avatar', '/docs/components/avatar'],
      ['Badge', '/docs/components/badge'],
      ['Blockquote', '/docs/components/blockquote'],
      ['Breadcrumb', '/docs/components/breadcrumb'],
      ['Button', '/docs/components/button'],
      ['Calendar', '/docs/components/calendar'],
      ['Callout', '/docs/components/callout'],
      ['Card', '/docs/components/card'],
      ['Checkbox', '/docs/components/checkbox'],
      ['Collapsible', '/docs/components/collapsible'],
      ['Combobox', '/docs/components/combobox'],
      ['Command', '/docs/components/command'],
      ['Datetime Picker', '/docs/components/datetime-picker'],
      ['Description List', '/docs/components/description-list'],
      ['Dialog', '/docs/components/dialog'],
      ['Divider', '/docs/components/divider'],
      ['Drawer', '/docs/components/drawer'],
      ['Dropdown Menu', '/docs/components/dropdown-menu'],
      ['Form', '/docs/components/form'],
      ['Heading', '/docs/components/heading'],
      ['Hover Card', '/docs/components/hover-card'],
      ['Input', '/docs/components/input'],
      ['Input Pin', '/docs/components/input-pin'],
      ['Kbd', '/docs/components/kbd'],
      ['Label', '/docs/components/label'],
      ['Listbox', '/docs/components/listbox'],
      ['Multi Select', '/docs/components/multi-select'],
      ['Pagination', '/docs/components/pagination'],
      ['Popover', '/docs/components/popover'],
      ['Radio Card Group', '/docs/components/radio-card-group'],
      ['Radio Group', '/docs/components/radio-group'],
      ['Scroll Area', '/docs/components/scroll-area'],
      ['Select', '/docs/components/select'],
      ['Skeleton', '/docs/components/skeleton'],
      ['Slider', '/docs/components/slider'],
      ['Switch', '/docs/components/switch'],
      ['Tab Navigation', '/docs/components/tab-navigation'],
      ['Table', '/docs/components/table'],
      ['Tabs', '/docs/components/tabs'],
      ['Text', '/docs/components/text'],
      ['Textarea', '/docs/components/textarea'],
      ['Toast', '/docs/components/toast'],
      ['Toggle', '/docs/components/toggle'],
      ['Tooltip', '/docs/components/tooltip'],
    ],
  },
  {
    name: 'Layout Components',
    icon: Lucide.Layout,
    items: [
      ['Context Menu', '/docs/components/context-menu'],
      ['Menubar', '/docs/components/menubar'],
      ['Navigation Menu', '/docs/components/navigation-menu'],
      ['Sidebar', '/docs/components/sidebar'],
      ['Split Pane', '/docs/components/split-pane'],
    ],
  },
  {
    name: 'Visualization Components',
    icon: Lucide.BarChart,
    items: [
      // ['Area Chart', '/docs/components/area-chart'],
      // ['Bar Chart', '/docs/components/bar-chart'],
      ['Bar List', '/docs/components/bar-list'],
      // ['Category Bar', '/docs/components/category-bar'],
      // ['Combo Chart', '/docs/components/combo-chart'],
      // ['Donut Chart', '/docs/components/donut-chart'],
      // ['Line Chart', '/docs/components/line-chart'],
      ['Progress Bar', '/docs/components/progress-bar'],
      ['Progress Circle', '/docs/components/progress-circle'],
      // ['Spark Chart', '/docs/components/spark-chart'],
      ['Tracker', '/docs/components/tracker'],
    ],
  },
  {
    name: 'Contributing',
    icon: Lucide.GitPullRequest,
    items: [
      ['Contributing Guidelines', '/docs/contributing-guidelines'],
      ['Contributors', '/docs/contributors'],
    ],
  },
]

export default function CustomDialog(props: SharedProps) {
  const { open, onOpenChange } = props
  const router = useRouter()

  const handleSelect = (value: string) => {
    router.push(value)
    if (onOpenChange) {
      onOpenChange(false)
    }
  }

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <Command className="w-full rounded-lg border shadow-md">
        <CommandInput placeholder="Search for components or documentation..." />
        <CommandList className="max-h-[468px] overflow-y-auto">
          <CommandEmpty>No results were found.</CommandEmpty>
          {LINKS.map((category) =>
            category.items.length > 0 ? (
              <div key={category.name}>
                <CommandGroup heading={category.name}>
                  {category.items.map(([title, url]) => (
                    <CommandItem key={url} value={url} onSelect={handleSelect}>
                      <category.icon className="mr-2 size-4" strokeWidth={2} />
                      <span>{title}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
                <CommandSeparator />
              </div>
            ) : null
          )}
        </CommandList>
      </Command>
    </CommandDialog>
  )
}
