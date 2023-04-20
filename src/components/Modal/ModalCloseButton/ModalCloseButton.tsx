import * as RadixModal from '@radix-ui/react-dialog'
import React from 'react'
import { isString } from '../../../utils/common'
import { Button } from '../../Button'
import '../Modal.scss'

export type ModalCloseButtonProps = {
  close?: string | React.ReactNode
}

export const ModalCloseButton = ({
  close = 'Close',
}: ModalCloseButtonProps) => {
  return (
    <RadixModal.Close asChild>
      {isString(close) ? <Button type="primary">{close}</Button> : close}
    </RadixModal.Close>
  )
}
