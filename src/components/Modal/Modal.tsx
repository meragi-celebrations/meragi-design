import * as RadixModal from '@radix-ui/react-dialog'
import classNames from 'classnames'
import React from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { Size } from '../../interface/common'
import { isString } from '../../utils/common'
import { Button } from '../Button'
import './Modal.scss'

export type ModalProps = {
  /**
   * Content of Modal.
   */
  children?: React.ReactNode
  /**
   * Size of the modal
   */
  size?: Size
  /**
   * Whether the Alert component is controlled or uncontrolled.
   */
  controlled?: boolean
  /**
   * Text or component to trigger the modal in uncontrolled mode.
   */
  control: string | React.ReactNode
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
  /**
   * Whether to show the close button.
   */
  showClose?: boolean
}

export const Modal = ({
  children,
  size = 'small',
  defaultOpen,
  controlled,
  control,
  open,
  onOpenChange,
  showClose = true,
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
        {isString(control) ? <Button>{control}</Button> : control}
      </RadixModal.Trigger>
      <RadixModal.Portal>
        <RadixModal.Overlay className="overlay" />
        <RadixModal.Content className={classNames('content', size)}>
          {children}
          {showClose && (
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
          )}
        </RadixModal.Content>
      </RadixModal.Portal>
    </RadixModal.Root>
  )
}
