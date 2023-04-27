import classnames from 'classnames'
import React, { useState } from 'react'
import { IoChevronForward } from 'react-icons/io5'
import { Text } from '../Text'
import './Tree.scss'

export interface TreeItem<T> {
  /**
   * Unique identifier for the node.
   */
  id: number
  /**
   * Label or text to display for the node.
   */
  label: string
  /**
   * An array of child nodes that are nested under this node.
   */
  children?: TreeItem<T>[]
  /**
   * A custom icon or element to display next to the node label.
   */
  icon?: React.ReactNode
  /**
   * Additional data or metadata associated with the node.
   */
  data?: T
  /**
   * An array of action components or buttons to display for the node.
   */
  actions?: React.ReactNode[]
}

export interface TreeProps<T> {
  /**
   * An array of `TreeItem` objects that represent the tree data to display.
   * ```TreeItem<T> {
        id: number
        label: string
        children?: TreeItem<T>[]
        icon?: React.ReactNode
        data?: T
        actions?: React.ReactNode[]
    }```
   */
  data: TreeItem<T>[]
  /**
   * Callback function that is called when a leaf is selected.
   */
  onSelect?: (item: TreeItem<T>) => void
  /**
   * Callback function that is called when a tree node is clicked.
   */
  onClick?: (item: TreeItem<T>) => void
  /**
   * An array of node IDs that should be initially expanded in the tree.
   */
  initialExpandedItems?: number[]
}

export const Tree = <T extends any>({
  data,
  onSelect,
  onClick,
  initialExpandedItems,
}: TreeProps<T>) => {
  const [expandedItems, setExpandedItems] = useState<number[]>(
    initialExpandedItems ?? [],
  )

  const [selected, setSelected] = useState<number>()

  const handleSelect = (item: TreeItem<T>) => {
    setSelected(item.id)
    onSelect?.(item)
  }

  const handleItemClick = (item: TreeItem<T>) => {
    setExpandedItems((prevExpandedItems) => {
      const isExpanded = prevExpandedItems.includes(item.id)
      return isExpanded
        ? prevExpandedItems.filter((expandedId) => expandedId !== item.id)
        : [...prevExpandedItems, item.id]
    })
    onClick?.(item)
    if (!item.children) handleSelect(item)
  }

  const renderItem = (item: TreeItem<T>) => {
    const isExpanded = expandedItems.includes(item.id)
    const hasChildren = item.children && item.children.length > 0

    return (
      <div
        key={item.id}
        className={classnames('tree-item', {
          'is-expanded': isExpanded,
        })}>
        <div
          className={classnames('tree-item-label')}
          onClick={() => handleItemClick(item)}>
          {hasChildren && (
            <div
              className={classnames('tree-item-arrow', {
                'is-expanded': isExpanded,
              })}>
              <IoChevronForward size={13} />
            </div>
          )}
          <div
            className={classnames('label-text-container', {
              'is-expanded': isExpanded && item.children,
              'is-selected': item.id === selected,
            })}>
            {item.icon && item.icon}
            <Text variant="p1">{item.label}</Text>
            <div
              className="action-container"
              onClick={(e) => e.stopPropagation()}>
              {item.actions?.map((action) => action)}
            </div>
          </div>
        </div>
        {hasChildren && isExpanded && (
          <div className="tree-item-children">
            {item?.children?.map(renderItem)}
          </div>
        )}
      </div>
    )
  }

  return <div className="tree">{data.map(renderItem)}</div>
}
