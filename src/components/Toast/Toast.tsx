import * as RxToast from '@radix-ui/react-toast'
import classNames from 'classnames'
import * as React from 'react'
import { IoClose } from 'react-icons/io5'
import { isString } from '../../utils/common'
import { Button } from '../Button'
import { Text } from '../Text'
import { ShowProps, ToastContext } from './Context'
import './Toast.scss'

export type ToastProps = {
  children: React.ReactNode
  showClose?: boolean
}

/**
 * Usage:
 *
 * `<Toast><App /></Toast>`
 * ```
 * const toast = useToast()
 * toast.show!({
          title: 'Toast',
          description: 'This is a toast',
          action: <Button type="ghost">Action</Button>,
          type: 'success',
          duration: 3000
        })
 * ```
 */
export const Toast = ({ children, showClose = false }: ToastProps) => {
  const timerRef = React.useRef(0)

  const [toasts, setToasts] = React.useState<ShowProps[]>([])

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  const show = (toast: ShowProps) => {
    setToasts((prev) => [...prev, toast])
  }

  return (
    <div className="toast">
      <ToastContext.Provider value={{ show }}>
        <RxToast.Provider swipeDirection="right">
          {children}

          {toasts.map((toast: ShowProps) => (
            <RxToast.Root
              className={classNames('root', toast.type)}
              duration={toast.duration ?? 3000}>
              <div>
                <RxToast.Title className="title">
                  <Text variant="h5">{toast.title}</Text>
                </RxToast.Title>
                <RxToast.Description asChild className="description">
                  {isString(toast.description) ? (
                    <Text>{toast.description}</Text>
                  ) : (
                    toast.description
                  )}
                </RxToast.Description>
              </div>

              {toast.action && (
                <div className="action">
                  <RxToast.Action asChild altText="Goto schedule to undo">
                    {toast.action}
                  </RxToast.Action>
                </div>
              )}
              {showClose && (
                <div className="close">
                  <RxToast.Close asChild>
                    <Button circular type="ghost" icon={<IoClose />} />
                  </RxToast.Close>
                </div>
              )}
            </RxToast.Root>
          ))}
          <RxToast.Viewport className="viewport" />
        </RxToast.Provider>
      </ToastContext.Provider>
    </div>
  )
}
