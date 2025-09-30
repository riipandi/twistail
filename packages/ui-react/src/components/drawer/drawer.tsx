import * as Lucide from 'lucide-react'
import { Dialog as DrawerPrimitive } from 'radix-ui'
import * as React from 'react'
import { Button } from '#/components/button'
import { type DrawerStyles, drawerStyles } from './drawer.css'

const Drawer = (props: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Root>) => {
  return <DrawerPrimitive.Root {...props} />
}

const DrawerTrigger = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Trigger>
>(({ className, ...props }, forwardedRef) => {
  const styles = drawerStyles()
  return (
    <DrawerPrimitive.Trigger
      ref={forwardedRef}
      className={styles.trigger({ className })}
      {...props}
    />
  )
})

const DrawerClose = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Close>
>(({ className, ...props }, forwardedRef) => {
  const styles = drawerStyles()
  return (
    <DrawerPrimitive.Close ref={forwardedRef} className={styles.close({ className })} {...props} />
  )
})

const DrawerPortal = DrawerPrimitive.Portal

const DrawerOverlay = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, forwardedRef) => {
  const styles = drawerStyles()
  return (
    <DrawerPrimitive.Overlay
      ref={forwardedRef}
      className={styles.overlay({ className })}
      {...props}
    />
  )
})

interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>,
    DrawerStyles {}

const DrawerContent = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Content>,
  DrawerContentProps
>(({ side = 'right', className, children, ...props }, forwardedRef) => {
  const styles = drawerStyles({ side })
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={forwardedRef}
        className={styles.content({ className })}
        {...props}
      >
        {children}
        <DrawerPrimitive.Close asChild>
          <Button variant="ghost" className={styles.closeButton()} size="sm">
            <Lucide.X className={styles.closeIcon()} aria-hidden="true" strokeWidth={2} />
          </Button>
        </DrawerPrimitive.Close>
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
})

const DrawerHeader = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, forwardedRef) => {
    const styles = drawerStyles()
    return <div ref={forwardedRef} className={styles.header({ className })} {...props} />
  }
)

const DrawerTitle = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, forwardedRef) => {
  const styles = drawerStyles()
  return (
    <DrawerPrimitive.Title ref={forwardedRef} className={styles.title({ className })} {...props} />
  )
})

const DrawerBody = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, forwardedRef) => {
    const styles = drawerStyles()
    return <div ref={forwardedRef} className={styles.body({ className })} {...props} />
  }
)

const DrawerDescription = React.forwardRef<
  React.ComponentRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, forwardedRef) => {
  const styles = drawerStyles()
  return (
    <DrawerPrimitive.Description
      ref={forwardedRef}
      className={styles.description({ className })}
      {...props}
    />
  )
})

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const styles = drawerStyles()
  return <div className={styles.footer({ className })} {...props} />
}

Drawer.displayName = 'Drawer'
DrawerTrigger.displayName = 'Drawer.Trigger'
DrawerClose.displayName = 'Drawer.Close'
DrawerPortal.displayName = 'DrawerPortal'
DrawerOverlay.displayName = 'DrawerOverlay'
DrawerContent.displayName = 'DrawerContent'
DrawerHeader.displayName = 'Drawer.Header'
DrawerTitle.displayName = 'DrawerTitle'
DrawerBody.displayName = 'Drawer.Body'
DrawerDescription.displayName = 'DrawerDescription'
DrawerFooter.displayName = 'DrawerFooter'

export {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
}
