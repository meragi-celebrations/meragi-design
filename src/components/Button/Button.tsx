import classnames from 'classnames'
import React, { ReactElement } from 'react'
import { Loader } from '../Loader'
import './Button.scss'

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  children?: React.ReactNode
  type?: 'default' | 'primary' | 'secondary' | 'danger' | 'success'
  size?: 'small' | 'medium' | 'large'
  circular?: boolean
  icon?: ReactElement
  loading?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'default',
  size = 'small',
  icon,
  loading,
  circular,
  ...rest
}) => {
  const classNames = classnames('button', type, size, { circular })

  return (
    <button className={classNames} {...rest}>
      <div className="button-content">
        {(loading || icon) && (
          <span className="icon-container">{loading ? <Loader /> : icon}</span>
        )}
        <span>{children}</span>
      </div>
    </button>
  )
}

export default Button
