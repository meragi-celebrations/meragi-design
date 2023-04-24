import * as ToastPrimitive from '@radix-ui/react-toast'
import React, { ReactElement, useEffect, useState } from 'react'
import { isString } from '../../utils/common'
import { Text } from '../Text'
import { Button } from '../Button'
import { Loader } from '../Loader'

export type ToastType =
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'primary'
  | 'default'

export type ToastProps = {
  key?: string
  message: string | React.ReactNode
  type?: ToastType
  closeable?: boolean
  closeIcon?: ReactElement
  onClose?: (open: boolean) => void
  open?: boolean
  onOpenChange?: (open: boolean) => void
  action?: React.ReactNode
  promise?: Promise<any>
}

export const ToastProvider = ToastPrimitive.Provider

export const ToastViewPort = ToastPrimitive.Viewport

export const Toast: React.FC<ToastProps> = ({
  key = Date.now().toString(),
  message,
  type = 'default',
  closeable = true,
  closeIcon,
  open,
  onOpenChange,
  action,
  promise,
}) => {
  const spinIcon = <Loader />
  const [toastType, setToastType] = useState(type)
  const [closIconState, setCloseIconState] = useState(
    promise ? false : closeable,
  )

  useEffect(() => {
    if (promise) {
      promise
        .then(() => setCloseIconState(false))
        .catch(() => setCloseIconState(true))
    }
  }, [promise])

  var close_text = closeIcon ? (
    <Button
      circular
      icon={closeIcon}
      onClick={() => {}}
      type={toastType == 'default' ? 'ghost' : toastType}
    />
  ) : (
    'Close'
  )
  return (
    <ToastPrimitive.Root
      key={key}
      className={`ToastRoot ${toastType}`}
      open={open}
      onOpenChange={onOpenChange}>
      {message && (
        <ToastPrimitive.Title>
          <Text variant="description">{message}</Text>
        </ToastPrimitive.Title>
      )}
      {closIconState && (
        <ToastPrimitive.Close
          className={`button ${type == 'default' ? 'ghost' : toastType}`}>
          {close_text}
        </ToastPrimitive.Close>
      )}
      {!closIconState && (
        <ToastPrimitive.Close
          className={`button ${type == 'default' ? 'ghost' : toastType}`}>
          {spinIcon}
        </ToastPrimitive.Close>
      )}

      {isString(action) ? (
        <ToastPrimitive.Action altText="" asChild className="ToastAction">
          {action}
        </ToastPrimitive.Action>
      ) : (
        <ToastPrimitive.Action altText="" asChild className="ToastAction">
          {action}
        </ToastPrimitive.Action>
      )}
    </ToastPrimitive.Root>
  )
}
