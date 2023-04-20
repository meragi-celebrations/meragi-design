import React from 'react'
import { Space } from '../../Space'
import '../Modal.scss'

export type ModalActionsProps = {
  actions: React.ReactNode[]
}

export const ModalActions = ({ actions }: ModalActionsProps) => {
  return (
    <div className="actions">
      <Space>{actions.map((action) => action)}</Space>
    </div>
  )
}
