import * as Separator from '@radix-ui/react-separator'
import classNames from 'classnames'
import React from 'react'
import './Divider.scss'

type DividerProps = {
  direction?: 'horizontal' | 'vertical'
  applyMargin?: boolean
}

export const Divider: React.FC<DividerProps> = ({
  direction = 'horizontal',
  applyMargin = true,
}) => {
  return (
    <Separator.Root
      className={classNames('divider', { margin: applyMargin })}
      orientation={direction}
    />
  )
}
