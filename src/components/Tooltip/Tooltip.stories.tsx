import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Tooltip } from '.'
import { Button } from '../Button'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta<typeof Tooltip>

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  args: {
    children: <Button>Hover me</Button>,
    content: 'This is a tooltip',
    side: 'right',
  },
}
