import { useContext } from 'react'
import { ToastContext } from './Context'

export const useToast = () => {
  return useContext(ToastContext)
}
