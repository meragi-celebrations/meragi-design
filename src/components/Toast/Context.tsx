import { createContext } from 'react'
import { Color } from '../../interface/common'

export type ShowProps = {
  title?: string
  description?: string | React.ReactNode
  action?: React.ReactNode
  type?: Color | 'default'
  duration?: number
}

export type ToastContextProps = {
  show: (toast: ShowProps) => void
}

export const ToastContext = createContext<ToastContextProps>({ show: () => {} })
