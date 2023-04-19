import * as Separator from '@radix-ui/react-separator'
import classNames from 'classnames'
import React from 'react'
import './Divider.scss'

type DividerProps = {
  direction?: 'horizontal' | 'vertical'
  applyMargin?: boolean
}

/**
 * A component that renders a divider line, either horizontally or vertically.
 */
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
