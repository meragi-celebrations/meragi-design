import classnames from 'classnames'
import React, { FC } from 'react'
import { Text } from '../Text'
import './List.scss'

export interface ListProps<T> {
  className?: string
  dataSource: T[]
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
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  hover?: boolean
  onHover?: () => void
  onClick?: () => void
  className?: string
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
