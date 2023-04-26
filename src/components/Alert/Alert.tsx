import * as AlertDialog from '@radix-ui/react-alert-dialog'
import React from 'react'
import { isString } from '../../utils/common'
import { Button } from '../Button'
import { Text } from '../Text'
import './Alert.scss'

/**
 * Props for Alert component.
 */
export type AlertProps = {
  /**
   * Title of the alert.
   */
  title?: string | React.ReactNode
  /**
   * Description of the alert.
   */
  description?: string | React.ReactNode
  /**
   * Type of alert (e.g. 'danger', 'warning', 'success').
   */
  type?: string
  /**
   * Text or component for cancel button.
   */
  cancel?: string | React.ReactNode
  /**
   * Function to call when cancel button is clicked.
   */
  onCancel?: () => void
  /**
   * Text or component for confirm button.
   */
  confirm?: string | React.ReactNode
  /**
   * Function to call when confirm button is clicked.
   */
  onConfirm?: () => void
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

/**
A modal dialog that interrupts the user with important content and expects a response.
*/
export const Alert = ({
  title,
  description,
  type = 'danger',
  cancel,
  onCancel,
  confirm,
  onConfirm,
  controlled = true,
  control,
  defaultOpen,
  open,
  onOpenChange,
}: AlertProps) => {
  const rootProps = !controlled
    ? {
        open,
        onOpenChange,
      }
    : {}

  return (
    <AlertDialog.Root defaultOpen={defaultOpen} {...rootProps}>
      {controlled && (
        <AlertDialog.Trigger asChild>
          {isString(control) ? <Button>{control}</Button> : control}
        </AlertDialog.Trigger>
      )}
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="overlay" />
        <AlertDialog.Content className="content">
          {isString(title) ? (
            <AlertDialog.Title className="title">
              <Text variant="h4">{title}</Text>
            </AlertDialog.Title>
          ) : (
            title
          )}
          {isString(description) ? (
            <AlertDialog.Description className="description">
              <Text>{description}</Text>
            </AlertDialog.Description>
          ) : (
            description
          )}
          <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
            <AlertDialog.Cancel asChild>
              {isString(cancel) ? (
                <Button
                  type="solid"
                  onClick={!controlled ? onCancel : undefined}>
                  {cancel}
                </Button>
              ) : (
                cancel
              )}
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              {isString(confirm) ? (
                <Button
                  type="solid"
                  color={type as any}
                  onClick={!controlled ? onConfirm : undefined}>
                  {confirm}
                </Button>
              ) : (
                confirm
              )}
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
