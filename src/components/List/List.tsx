import classnames from 'classnames'
import React, { FC } from 'react'
import { Text } from '../Text'
import './List.scss'

export interface ListProps<T> {
  /**
   * The CSS class name(s) to apply to the List component.
   */
  className?: string
  /**
   * The data source to render in the List.
   * This should be an array of items of type `T`.
   */
  dataSource: T[]
  /**
   * The function that renders each item in the List.
   * This should take an item of type `T` and its index in the `dataSource` array as arguments,
   * and should return a React node that represents the item.
   */
  renderItem: (item: T, index: number) => React.ReactNode
}

export function List<T extends any>({
  className,
  dataSource,
  renderItem,
}: ListProps<T>) {
  const classNames = classnames('list', className)

  return (
    <ul className={classNames}>
      {dataSource.map((item, index) => (
        <li key={index}>{renderItem(item, index)}</li>
      ))}
    </ul>
  )
}

export type ListItemProps = {
  /**
   * The title of the list item, which can be either a string or a React node.
   */
  title?: string | React.ReactNode
  /**
   * The description of the list item, which can be either a string or a React node.
   */
  description?: string | React.ReactNode
  /**
   * Whether the list item should have hover effects.
   */
  hover?: boolean
  /**
   * Callback function to handle click events.
   */
  onClick?: () => void
  /**
   * The CSS class name(s) to apply to the list item.
   */
  className?: string
  /**
   * The child elements of the list item.
   */
  children?: React.ReactNode
}

export const ListItem: FC<ListItemProps> = ({
  title,
  description,
  hover,
  onClick,
  className,
  children,
}) => {
  const classNames = classnames('list-item', className, { hover })

  return (
    <div className={classNames} onClick={onClick}>
      <div className="title">{title && <Text variant="h3">{title}</Text>}</div>
      <div className="description">
        {description && <Text variant="description">{description}</Text>}
      </div>
      {children}
    </div>
  )
}
