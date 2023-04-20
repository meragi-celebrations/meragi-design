import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ModalActions } from '.'
import { Modal } from '../Modal'
import { ModalBody } from '../ModalBody'
import { ModalCloseButton } from '../ModalCloseButton'

export default {
  title: 'Components/Modal/ModalActions',
  component: ModalActions,
} as Meta<typeof ModalActions>

type Story = StoryObj<typeof ModalActions>

const actions = ['action', <ModalCloseButton />]

export const Base: Story = {
  render: () => (
    <Modal>
      <ModalBody title="Modal Title" description="Modal Description">
        Modal Content
        <ModalActions actions={actions} />
      </ModalBody>
    </Modal>
  ),
}
