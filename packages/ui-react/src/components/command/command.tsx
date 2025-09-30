import { Command as CommandPrimitive } from 'cmdk'
import * as Lucide from 'lucide-react'
import * as React from 'react'
import { Dialog, DialogContent, type DialogProps, DialogTitle } from '#/components/dialog'
import { commandStyles } from './command.css'

const Command = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, forwardedRef) => {
  const styles = commandStyles()
  return <CommandPrimitive ref={forwardedRef} className={styles.root({ className })} {...props} />
})

interface CommandDialogProps extends DialogProps {
  filter?: (value: string, search: string, keywords?: string[]) => number
}

const CommandDialog = ({ children, filter, ...props }: CommandDialogProps) => {
  const styles = commandStyles()
  return (
    <Dialog {...props}>
      <DialogTitle className="sr-only">Open Command Dialog</DialogTitle>
      <DialogContent className={styles.dialogContent()}>
        <Command className={styles.dialogCommand()} filter={filter}>
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, forwardedRef) => {
  const styles = commandStyles()
  return (
    <div className={styles.inputWrapper()} cmdk-input-wrapper="">
      <Lucide.Search className={styles.inputIcon()} />
      <CommandPrimitive.Input
        ref={forwardedRef}
        className={styles.input({ className })}
        {...props}
      />
    </div>
  )
})

const CommandList = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, forwardedRef) => {
  const styles = commandStyles()
  return (
    <CommandPrimitive.List
      ref={forwardedRef}
      className={styles.list({ className })}
      asChild
      {...props}
    />
  )
})

const CommandEmpty = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, forwardedRef) => {
  const styles = commandStyles()
  return <CommandPrimitive.Empty ref={forwardedRef} className={styles.empty()} {...props} />
})

const CommandGroup = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, forwardedRef) => {
  const styles = commandStyles()
  return (
    <CommandPrimitive.Group ref={forwardedRef} className={styles.group({ className })} {...props} />
  )
})

const CommandSeparator = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, forwardedRef) => {
  const styles = commandStyles()
  return (
    <CommandPrimitive.Separator
      ref={forwardedRef}
      className={styles.separator({ className })}
      {...props}
    />
  )
})

const CommandItem = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, forwardedRef) => {
  const styles = commandStyles()
  return (
    <CommandPrimitive.Item ref={forwardedRef} className={styles.item({ className })} {...props} />
  )
})

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  const styles = commandStyles()
  return <span className={styles.shortcut({ className })} {...props} />
}

Command.displayName = CommandPrimitive.displayName
CommandInput.displayName = CommandPrimitive.Input.displayName
CommandList.displayName = CommandPrimitive.List.displayName
CommandEmpty.displayName = CommandPrimitive.Empty.displayName
CommandGroup.displayName = CommandPrimitive.Group.displayName
CommandSeparator.displayName = CommandPrimitive.Separator.displayName
CommandItem.displayName = CommandPrimitive.Item.displayName
CommandShortcut.displayName = 'CommandShortcut'
CommandDialog.displayName = 'CommandDialog'

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
