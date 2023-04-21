import * as ToastPrimitive from '@radix-ui/react-toast';
import React from 'react'
import { Text } from '../Text'

export type ToastProps = {
    message: string
    type?: 'success' | 'error' | 'warning' | 'info' | 'primary' | 'default'
    close: string | React.ReactNode
    onClose?: () => void
    open?: boolean
    onOpenChange?: (open: boolean) => void
    action?: React.ReactNode
}

export const ToastProvider = ToastPrimitive.Provider

export const ToastViewPort = ToastPrimitive.Viewport

export const Toast: React.FC<ToastProps> = ({
    message,
    type = 'default',
    open,
    onOpenChange,
    action,
}) => {
    return (
        <ToastPrimitive.Root className={`ToastRoot ${type}`} open={open} onOpenChange={onOpenChange}>
            {message && <Text variant='description'>{message}</Text>}
            {action && <ToastPrimitive.Action altText='' className='ToastAction'>{action}</ToastPrimitive.Action>}
        </ToastPrimitive.Root>
    )
}



