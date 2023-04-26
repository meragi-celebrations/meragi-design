import * as Separator from '@radix-ui/react-separator'
import classNames from 'classnames'
import React from 'react'
import './Divider.scss'

export type DividerProps = {
  /**
   * The direction in which the divider should be displayed.
   * If set to 'horizontal', the divider will be displayed horizontally.
   * If set to 'vertical', the divider will be displayed vertically.
   * If not specified, the default value is 'horizontal'.
   */
  direction?: 'horizontal' | 'vertical'
  /**
   * Whether to apply margin to the divider or not.
   * If set to true, the divider will have a margin applied to it.
   * If set to false or not specified, no margin will be applied to the divider.
   */
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
