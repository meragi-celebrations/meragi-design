import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Card } from '.'
import { Button } from '../Button'

export default {
  title: 'Components/Card',
  component: Card,
} as Meta<typeof Card>

type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <div style={{ width: 250 }}>
      <Card
        title="This is title"
        description="This is description"
        imageUrl="https://picsum.photos/600/500"
        actions={[
          <Button type="ghost">Action</Button>,
          <Button type="ghost">Action</Button>,
        ]}
      />
    </div>
  ),
}

export const WithoutImage: Story = {
  args: {
    title: 'This is title',
    description: 'This is description',
    actions: ['Action', 'Action', 'Action'],
  },
}

export const WithoutActions: Story = {
  args: {
    title: 'This is title',
    description: 'This is description',
  },
}

/**
 * Gives you the freedom to add anything on top of the card
 */
export const WithExtra: Story = {
  args: {
    ...WithoutImage.args,
    extra: <div>Extra part</div>,
  },
}
