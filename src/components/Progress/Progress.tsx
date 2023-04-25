import * as RxProgress from '@radix-ui/react-progress'
import classNames from 'classnames'
import React from 'react'
import { Color, Size } from '../../interface/common'
import './Progress.scss'

export type ProgressProps = {
  value: number
  color?: Color
  size?: Size
  width?: number | string
  height?: number
}

export const Progress = ({
  value,
  color = 'primary',
  size = 'small',
  width = 'inherit',
  height,
}: ProgressProps) => {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 200)
    return () => clearTimeout(timer)
  }, [])

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 200)
    return () => clearTimeout(timer)
  }, [value])

  return (
    <RxProgress.Root
      className={classNames('progress', size)}
      style={{ width, height }}
      value={progress}>
      <RxProgress.Indicator
        className={classNames('indicator', color)}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </RxProgress.Root>
  )
}
