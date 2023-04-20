import * as RadixModal from '@radix-ui/react-dialog'
import React from 'react'
import { isString } from '../../../utils/common'
import { Text } from '../../Text'
import '../Modal.scss'

export type ModalBodyProps = {
  children?: React.ReactNode
  title?: string | React.ReactNode
  description?: string | React.ReactNode
}

export const ModalBody = ({ children, title, description }: ModalBodyProps) => {
  return (
    <>
      <RadixModal.Title className="title">
        {isString(title) ? <Text variant="h4">{title}</Text> : title}
      </RadixModal.Title>
      <RadixModal.Description className="description">
        {isString(description) ? <Text>{description}</Text> : description}
      </RadixModal.Description>
      {children}
    </>
  )
}
