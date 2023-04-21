import { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from '.'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta<typeof Tooltip>

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  args: {
    children: 'Hover me',
    content: 'This is a tooltip',
    side: 'right',
  },
}
