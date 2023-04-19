import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Divider } from '.'

export default {
  title: 'Components/Divider',
  component: Divider,
} as Meta<typeof Divider>

type Story = StoryObj<typeof Divider>

export const Default: Story = {
  render: () => (
    <div style={{ width: 500 }}>
      text <Divider /> Text
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', height: 20 }}>
      text <Divider direction="vertical" /> Text
    </div>
  ),
}
