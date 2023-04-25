import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Toast, useToast } from '.'
import { Button } from '../Button'
import './Toast.scss'

export default {
  title: 'Components/Toast',
  component: Toast,
} as Meta<typeof Toast>

type Story = StoryObj<typeof Toast>

const array = ['primary', 'success', 'error', 'warning', 'info']

const App = () => {
  const toast = useToast()
  return (
    <Button
      onClick={() =>
        toast.show!({
          title: 'Toast',
          description: 'This is a toast',
          action: <Button type="ghost">Action</Button>,
          type: array[Math.floor(Math.random() * array.length)] as any,
        })
      }>
      Open
    </Button>
  )
}

export const Default: Story = {
  args: {
    children: <App />,
  },
}
