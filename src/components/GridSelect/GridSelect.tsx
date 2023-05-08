import React from 'react'
import { useStateWithCallbackLazy } from '../../hooks'
import { Size } from '../../interface/common'
import { Col, Row } from '../Grid'
import { Modal, ModalBody } from '../Modal'
import './GridSelect.scss'

export type GridSelectProps<T> = {
  /**
   * Text or component to trigger the GridSelect.
   */
  control?: string | React.ReactNode
  /**
   * The data source to render in the GridSelect.
   * This should be an array of items of type `T`.
   */
  dataSource: T[]
  /**
   * The function that renders each item in the GridSelect.
   * This should take an item of type `T`, its index in the `dataSource` array,
   * and the currently selected id(s) as arguments,
   * and should return a React node that represents the item.
   */
  renderItem: (item: T, index: number, selected: any) => React.ReactNode
  /**
   * The number of columns each item should span.
   */
  span?: number
  /**
   * The size of modal.
   */
  size?: Size
  /**
   * The item(s) that should be selected by default.
   * This should be an array of the same type as the `getId` function returns.
   */
  defaultSelected?: any[]
  /**
   * Callback function to handle selection changes.
   * This should take the newly selected item of type `T` and the selected id(s)
   * as arguments, and should not return anything.
   */
  onChange?: (item: T, selected: any) => void
  /**
   * The title of the GridSelect, which can be either a string or a React node.
   */
  title?: string | React.ReactNode
  /**
   * The function that returns the ID of an item in the `dataSource`.
   * This ID should be of a type that can be compared to the items in the `defaultSelected` array.
   */
  getId: (item: T) => any
  /**
   * Content to display at the top right of the GridSelect Modal.
   */
  extra?: React.ReactNode
}

export const GridSelect = <T extends any>({
  control = 'Select',
  dataSource,
  renderItem,
  span = 6,
  size = 'medium',
  defaultSelected,
  onChange,
  title,
  getId,
  extra,
}: GridSelectProps<T>) => {
  const [selected, setSelected] = useStateWithCallbackLazy(
    defaultSelected || [],
  )

  const handleClick = (item: T) => {
    const id = getId(item)
    if (selected.includes(id)) {
      setSelected(
        selected.filter((curId) => curId !== id),
        (curSelected: any) => onChange?.(item, curSelected),
      )
    } else {
      setSelected([...selected, id], (curSelected: any) =>
        onChange?.(item, curSelected),
      )
    }
  }

  return (
    <Modal control={control} size={size} showClose={false}>
      <div className="grid-select">
        <ModalBody title={title}>
          <Row>
            {dataSource.map((item, index) => (
              <Col span={span}>
                <div onClick={() => handleClick(item)}>
                  {renderItem(item, index, selected)}
                </div>
              </Col>
            ))}
          </Row>
        </ModalBody>
        {extra && <div className="extra-container">{extra}</div>}
      </div>
    </Modal>
  )
}
