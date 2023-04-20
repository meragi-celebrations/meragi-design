import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Drawer } from '.'
import { Text } from '../Text'

export default {
  title: 'Components/Drawer',
  component: Drawer,
} as Meta<typeof Drawer>

type Story = StoryObj<typeof Drawer>

export const Base: Story = {
  args: {
    children: (
      <>
        <Text>Content of Modal</Text>
      </>
    ),
  },
}

export const Left: Story = {
  args: {
    ...Base.args,
    direction: 'left',
  },
}

export const Bottom: Story = {
  args: {
    ...Base.args,
    direction: 'bottom',
  },
}

export const Top: Story = {
  args: {
    ...Base.args,
    direction: 'top',
  },
}
