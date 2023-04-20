import * as RadixDrawer from '@radix-ui/react-dialog'
import classNames from 'classnames'
import React from 'react'
import { isString } from '../../utils/common'
import { Button } from '../Button'
import './Drawer.scss'

export type DrawerProps = {
  /**
   * Content of Drawer.
   */
  children?: React.ReactNode
  direction?: 'top' | 'right' | 'bottom' | 'left'
  size?: 'small' | 'medium' | 'large'
  /**
   * Whether the Drawer component is controlled or uncontrolled.
   */
  controlled?: boolean
  /**
   * Text or component to trigger the Drawer when in controlled mode.
   */
  control?: string | React.ReactNode
  /**
   * Whether the Drawer should be open by default.
   */
  defaultOpen?: boolean
  /**
   * Whether the Drawer is open or closed (in uncontrolled mode).
   */
  open?: boolean
  /**
   * Function to call when the open state of the Drawer changes (in uncontrolled mode).
   */
  onOpenChange?: (open: boolean) => void
}

export const Drawer = ({
  children,
  direction = 'right',
  size = 'small',
  defaultOpen,
  controlled = true,
  control = 'Open',
  open,
  onOpenChange,
}: DrawerProps) => {
  const rootProps = !controlled
    ? {
        open,
        onOpenChange,
      }
    : {}

  return (
    <RadixDrawer.Root defaultOpen={defaultOpen} {...rootProps}>
      <RadixDrawer.Trigger asChild>
        {isString(control) ? (
          <Button className="Button violet">{control}</Button>
        ) : (
          control
        )}
      </RadixDrawer.Trigger>
      <RadixDrawer.Portal>
        <RadixDrawer.Overlay className="overlay" />
        <RadixDrawer.Content
          className={classNames('drawer-content ', direction, size)}>
          {children}
        </RadixDrawer.Content>
      </RadixDrawer.Portal>
    </RadixDrawer.Root>
  )
}
