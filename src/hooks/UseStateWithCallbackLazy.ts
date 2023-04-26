import { useEffect, useRef, useState } from 'react'

export const useStateWithCallbackLazy = <T>(
  initialValue?: T,
): [T, (newValue: T, callback: any) => void] => {
  const callbackRef = useRef(null)

  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    if (callbackRef.current) {
      ;(callbackRef.current as any)(value)

      callbackRef.current = null
    }
  }, [value])

  const setValueWithCallback = (newValue: T, callback: any) => {
    callbackRef.current = callback

    return setValue(newValue)
  }

  return [value as T, setValueWithCallback]
}
