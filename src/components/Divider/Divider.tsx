import classNames from 'classnames'
import React from 'react'
import './Divider.scss'

type DividerProps = {
  direction?: 'horizontal' | 'vertical'
}

export const Divider: React.FC<DividerProps> = ({
  direction = 'horizontal',
}) => {
  const className = classNames('divider', direction)

  return <div className={className}></div>
}
