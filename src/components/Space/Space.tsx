import classnames from 'classnames'
import React from 'react'
import './Space.scss'

type Direction = 'horizontal' | 'vertical'

export interface SpaceProps {
  direction?: Direction
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
}

export const Space = ({
  direction = 'horizontal',
  size = 'small',
  children,
}: SpaceProps) => {
  const wrapperClassName = classnames(`space-wrapper`, direction)
  const childClassName = classnames('space-child', direction, size)

  return (
    <div className={wrapperClassName}>
      {React.Children.map(children, (child, index) => (
        <div className={childClassName} key={index}>
          {child}
        </div>
      ))}
    </div>
  )
}
