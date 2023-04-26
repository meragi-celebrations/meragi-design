import React from 'react'
import { useStateWithCallbackLazy } from '../../hooks'
import { Size } from '../../interface/common'
import { Col, Row } from '../Grid'
import { Modal, ModalBody } from '../Modal'
import './GridSelect.scss'

export type GridSelectProps<T> = {
  control?: string | React.ReactNode
  /**
   * The data source to render in the GridSelect.
   * This should be an array of items of type `T`.
   */
  dataSource: T[]
  renderItem: (item: T, index: number, selected: any) => React.ReactNode
  span?: number
  size?: Size
  defaultSelected?: any[]
  onChange?: (item: T, prevSelected: any) => void
  title?: string | React.ReactNode
  getId: (item: T) => any
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
    <>
      <Modal control={control} size={size} showClose={false}>
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
      </Modal>
    </>
  )
}
