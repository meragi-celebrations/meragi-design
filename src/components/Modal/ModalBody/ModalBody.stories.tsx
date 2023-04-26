import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ModalBody } from '.'
import { Modal } from '../Modal'

export default {
  title: 'Components/Modal/ModalBody',
  component: ModalBody,
} as Meta<typeof ModalBody>

type Story = StoryObj<typeof ModalBody>

export const Base: Story = {
  render: () => (
    <Modal control="Open">
      <ModalBody title="Modal Title" description="Modal Description">
        Modal Content
      </ModalBody>
    </Modal>
  ),
}
