import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Progress } from '.'

export default {
  title: 'Components/Progress',
  component: Progress,
} as Meta<typeof Progress>

type Story = StoryObj<typeof Progress>

export const Default: Story = {
  args: {
    value: 78,
    width: 300,
  },
}

export const Wrapped: Story = {
  render: () => {
    return (
      <div style={{ width: 300 }}>
        <Progress value={73} />
      </div>
    )
  },
}
