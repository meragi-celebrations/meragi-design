import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Alert } from '.'
import { Button } from '../..'

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta<typeof Alert>

type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    /**The title of the alert. */
    title: 'Are you absolutely sure?',
    description:
      'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    cancel: 'Cancel',
    confirm: 'Yes, delete account',
    defaultOpen: false,
    controlled: true,
    control: <Button color="danger">Delete</Button>,
    open: false,
    onOpenChange: (open) => {},
  },
}

export const Info: Story = {
  args: {
    ...Default.args,
    type: 'info',
  },
}

export const Warning: Story = {
  args: {
    ...Default.args,
    type: 'warning',
  },
}

export const Success: Story = {
  args: {
    ...Default.args,
    type: 'success',
  },
}

export const UnControlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Alert
          title="Are you absolutely sure?"
          description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
          cancel="Cancel"
          confirm="Yes, delete account"
          controlled={false}
          open={open}
          onCancel={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
        />
      </>
    )
  },
}

export const CustomCancelAndConfirm: Story = {
  args: {
    ...Default.args,
    cancel: <Button>Custom cancel</Button>,
    confirm: <Button>Custom confirm</Button>,
  },
}

export const CustomControlText: Story = {
  args: {
    ...Default.args,
    control: 'Just the text changes',
  },
}

export const CustomControlComponent: Story = {
  args: {
    ...Default.args,
    control: <Button color="primary">Custom control</Button>,
  },
}
