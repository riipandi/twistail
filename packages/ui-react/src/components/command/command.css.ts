import { type VariantProps, tv } from 'tailwind-variants'

const commandStyles = tv({
  slots: {
    root: 'flex size-full flex-col overflow-hidden rounded-lg bg-popover text-popover-foreground',
    dialogContent: [
      '-translate-x-1/2 fixed top-[33vh] left-1/2 w-full max-w-lg translate-y-0 overflow-hidden rounded-lg border border-border p-0 shadow-lg',
    ],
    dialogCommand: [
      '[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
      '[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-1 [&_[cmdk-input-wrapper]_svg]:h-4',
      '[&_[cmdk-input-wrapper]_svg]:w-4 [&_[cmdk-input]]:h-10 [&_[cmdk-item]]:px-3 [&_[cmdk-item]]:py-1.5 [&_[cmdk-item]_svg]:h-4 [&_[cmdk-item]_svg]:w-4',
    ],
    inputWrapper: 'flex h-11 items-center border-border border-b px-4',
    inputIcon: 'mr-2 size-4 shrink-0 text-muted-foreground',
    input: [
      'flex h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
    ],
    list: 'max-h-[320px] overflow-y-auto overflow-x-hidden rounded-b-lg p-1',
    empty: 'py-6 text-center text-muted-foreground text-sm',
    group: [
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5',
      '[&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:text-xs',
    ],
    separator: '-mx-1 my-1 h-px bg-border',
    item: [
      'relative flex cursor-pointer select-none items-center gap-1 rounded-sm px-2 py-1.5 text-foreground text-sm outline-hidden transition-colors',
      'data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:hover:bg-accent/80',
      'data-[disabled=true]:text-muted-foreground data-[selected=true]:text-accent-foreground',
      'hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground',
      '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground',
      'data-[selected=true]:[&_svg]:text-accent-foreground',
    ],
    shortcut: 'ml-auto text-muted-foreground text-xs tracking-widest',
  },
})

type CommandStyles = VariantProps<typeof commandStyles>

export { commandStyles, type CommandStyles }
