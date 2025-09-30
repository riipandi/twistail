import type { Meta, StoryObj } from '@storybook/react'
import * as Lucide from 'lucide-react'
import * as React from 'react'
import { Button } from '#/components/button'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '#/components/command'
import { Kbd } from '#/components/kbd'
import { ScrollArea } from '#/components/scroll-area'

const meta: Meta<typeof Command> = {
  component: Command,
  title: 'Base Components/Command',
  tags: ['autodocs', 'status:done'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Command>

export const Default: Story = {
  render: () => (
    <Command className="w-[460px] rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList className="min-w-[420px]">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Lucide.Calendar className="mr-2 size-4" strokeWidth={2} />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Lucide.Smile className="mr-2 size-4" strokeWidth={2} />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Lucide.Calculator className="mr-2 size-4" strokeWidth={2} />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <Lucide.User className="mr-2 size-4" strokeWidth={2} />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Lucide.CreditCard className="mr-2 size-4" strokeWidth={2} />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Lucide.Settings className="mr-2 size-4" strokeWidth={2} />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const WithTrigger: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          setOpen((open) => !open)
        }
      }
      document.addEventListener('keydown', down)
      return () => document.removeEventListener('keydown', down)
    }, [])

    // Suggestions items
    const suggestionItems = [
      { icon: Lucide.Calendar, label: 'Calendar' },
      { icon: Lucide.Smile, label: 'Search Emoji' },
      { icon: Lucide.Calculator, label: 'Calculator' },
      { icon: Lucide.Search, label: 'Search' },
      { icon: Lucide.Mail, label: 'Mail' },
      { icon: Lucide.MessageSquare, label: 'Messages' },
    ]

    // Settings items
    const settingsItems = [
      { icon: Lucide.User, label: 'Profile', shortcut: '⌘P' },
      { icon: Lucide.CreditCard, label: 'Billing', shortcut: '⌘B' },
      { icon: Lucide.Settings, label: 'Settings', shortcut: '⌘S' },
      { icon: Lucide.Bell, label: 'Notifications', shortcut: '⌘N' },
      { icon: Lucide.Shield, label: 'Security', shortcut: '⌘L' },
    ]

    // Tools items
    const toolsItems = [
      { icon: Lucide.FileText, label: 'Documents', shortcut: '⌘D' },
      { icon: Lucide.Image, label: 'Images', shortcut: '⌘I' },
      { icon: Lucide.Video, label: 'Videos', shortcut: '⌘V' },
      { icon: Lucide.BarChart2, label: 'Analytics', shortcut: '⌘A' },
    ]

    return (
      <>
        <Button variant="outline" className="gap-2" onClick={() => setOpen((open) => !open)}>
          <span>Open Command</span>
          <Kbd keys={['command']}>J</Kbd>
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen} modal={true}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <ScrollArea>
              <CommandGroup heading="Suggestions">
                {suggestionItems.map((item, index) => (
                  <CommandItem key={`suggestion-${index}`}>
                    <item.icon className="mr-2 size-4" strokeWidth={2} />
                    <span>{item.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                {settingsItems.map((item, index) => (
                  <CommandItem key={`setting-${index}`}>
                    <item.icon className="mr-2 size-4" strokeWidth={2} />
                    <span>{item.label}</span>
                    {item.shortcut && <CommandShortcut>{item.shortcut}</CommandShortcut>}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Tools">
                {toolsItems.map((item, index) => (
                  <CommandItem key={`tool-${index}`}>
                    <item.icon className="mr-2 size-4" strokeWidth={2} />
                    <span>{item.label}</span>
                    {item.shortcut && <CommandShortcut>{item.shortcut}</CommandShortcut>}
                  </CommandItem>
                ))}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </CommandDialog>
      </>
    )
  },
}
