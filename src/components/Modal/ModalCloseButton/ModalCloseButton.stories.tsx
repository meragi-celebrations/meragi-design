import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ModalCloseButton } from '.'
import { Modal } from '../Modal'
import { ModalBody } from '../ModalBody'

export default {
  title: 'Components/Modal/ModalCloseButton',
  component: ModalCloseButton,
} as Meta<typeof ModalCloseButton>

type Story = StoryObj<typeof ModalCloseButton>

export const Base: Story = {
  render: () => (
    <Modal control="Open">
      <ModalBody title="Modal Title" description="Modal Description">
        Modal Content
        <ModalCloseButton />
      </ModalBody>
    </Modal>
  ),
}
