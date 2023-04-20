import * as RadixModal from '@radix-ui/react-dialog'
import React from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { Button } from '../Button'
import './Modal.scss'

export type ModalProps = {
  /**
   * Content of Modal.
   */
  children?: React.ReactNode
  /**
   * Whether the Alert component is controlled or uncontrolled.
   */
  controlled?: boolean
  /**
   * Text or component to trigger the Alert when in controlled mode.
   */
  control?: string | React.ReactNode
  /**
   * Whether the Alert should be open by default.
   */
  defaultOpen?: boolean
  /**
   * Whether the Alert is open or closed (in uncontrolled mode).
   */
  open?: boolean
  /**
   * Function to call when the open state of the Alert changes (in uncontrolled mode).
   */
  onOpenChange?: (open: boolean) => void
}

export const Modal = ({
  children,
  defaultOpen,
  controlled,
  open,
  onOpenChange,
}: ModalProps) => {
  const rootProps = !controlled
    ? {
        open,
        onOpenChange,
      }
    : {}

  return (
    <RadixModal.Root defaultOpen={defaultOpen} {...rootProps}>
      <RadixModal.Trigger asChild>
        <button className="Button violet">Edit profile</button>
      </RadixModal.Trigger>
      <RadixModal.Portal>
        <RadixModal.Overlay className="overlay" />
        <RadixModal.Content className="content">
          {children}
          <div className="close-icon">
            <RadixModal.Close asChild>
              <Button
                aria-label="Close"
                type="ghost"
                circular
                icon={<IoCloseCircleOutline />}
              />
            </RadixModal.Close>
          </div>
        </RadixModal.Content>
      </RadixModal.Portal>
    </RadixModal.Root>
  )
}
