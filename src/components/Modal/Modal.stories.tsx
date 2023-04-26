import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Modal } from '.'
import { Text } from '../Text'
import { ModalActions } from './ModalActions'
import { ModalBody } from './ModalBody'
import { ModalCloseButton } from './ModalCloseButton'

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta<typeof Modal>

type Story = StoryObj<typeof Modal>

export const Base: Story = {
  args: {
    control: 'Open',
    children: (
      <>
        <Text>Content of Modal</Text>
      </>
    ),
  },
}

export const CompleteExample: Story = {
  args: {
    control: 'Open',
    children: (
      <>
        <ModalBody
          title="Title from modal body"
          description="Description from modal body"></ModalBody>
        <ModalActions actions={[<ModalCloseButton />]} />
      </>
    ),
  },
}
