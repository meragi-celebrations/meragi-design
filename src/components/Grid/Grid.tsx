import classNames from 'classnames'
import React from 'react'
import './Grid.scss'

/**
 * Props for the Row component.
 */
export interface RowProps {
  /**
   * The content to display within the row. This can be any valid React node.
   */
  children?: React.ReactNode
  /**
   * The amount of horizontal and vertical space (in pixels) to insert between each child element in the row.
   * Can be a single number to specify a uniform gutter for all children, or a tuple of two numbers
   * to specify different gutters for horizontal and vertical spacing for each child.
   * The first number in the tuple specifies the horizontal gutter, and the second number specifies the vertical gutter.
   * If only one number is specified, the gutter will be applied to both horizontal and vertical spacing for the
   * specified  child and all other children, respectively.
   * If not specified, a default gutter value will be used.
   */
  gutter?: number | [number, number]
}

/**
 *
 */
export const Row = ({ children, gutter = 5 }: RowProps) => {
  const [hGutter, vGutter] = Array.isArray(gutter) ? gutter : [gutter, gutter]

  return (
    <div
      className={classNames('row', {
        [`gutter-hor-${hGutter}`]: hGutter,
        [`gutter-ver-${vGutter}`]: vGutter,
      })}>
      {children}
    </div>
  )
}

export interface ColProps {
  /**
   * The content to display within the column. This can be any valid React node.
   */
  children?: React.ReactNode
  /**
   * The number of columns that the current column should span within its parent row.
   * If not specified, the column will span one column by default.
   */
  span?: number
  /**
   * An object containing custom style properties to apply to the column.
   * These styles will override any default or inherited styles for the column.
   */
  style?: React.CSSProperties
}

export const Col: React.FC<ColProps> = ({ span, children, style }) => {
  const colClasses = classNames('col', {
    [`col-${span}`]: span,
  })

  return (
    <div className={colClasses} style={style}>
      {children}
    </div>
  )
}
