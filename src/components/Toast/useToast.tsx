import React, { useState } from 'react';
import { Toast, ToastProps } from './Toast';

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const showToast = (props: ToastProps) => {
    setToasts((prevToasts) => [...prevToasts, props]);
  };

  const hideToast = (key: string | undefined) => {
    setToasts((prevToasts) =>
      prevToasts.filter((toast) => {
        if (toast.key === key) {
            console.log(toast.key)
          // Call onClose function to handle any additional cleanup
          if (toast.onClose) {
            toast.onClose(false);
          }
          return false;
        }
        return true;
      })
    );
  };

  return {
    showToast,
    hideToast,
    ToastContainer: () => (
      <>
        {toasts.map((toastProps) => (
          <Toast onClose={() => hideToast(toastProps.key)} {...toastProps} />
        ))}
      </>
    ),
  };
};
