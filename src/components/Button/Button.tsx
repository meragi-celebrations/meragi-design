import classnames from 'classnames'
import React from 'react'
import { Loader } from '../Loader'
import './Button.scss'

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  /**
   * The content to display inside the button.
   * This can be a simple string or a more complex React node.
   */
  children?: React.ReactNode
  /**
   * The type of button to display.
   * This can be one of several predefined types, such as 'primary', 'secondary', etc.
   * If not specified, the default value is 'default'.
   */
  type?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'info'
    | 'ghost'
  /**
   * The size of the button to display.
   * This can be one of several predefined sizes, such as 'small', 'medium', or 'large'.
   * If not specified, the default value is 'medium'.
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Whether to display the button in a circular shape or not.
   * If set to true, the button will be displayed as a circle.
   * If set to false or not specified, the button will be displayed as a rectangle.
   */
  circular?: boolean
  /**
   * The icon element to display inside the button.
   * This can be any valid React element.
   */
  icon?: React.ReactElement
  /**
   * Whether to display a loading spinner inside the button or not.
   * If set to true, the button will display a spinner while the action is being processed.
   * If set to false or not specified, the button will not display a spinner.
   */
  loading?: boolean
  /**
   * The function to call when the button is clicked.
   * This function should take a `React.MouseEvent<HTMLButtonElement>` parameter and return void.
   */
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
