import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Toast, ToastProvider, ToastViewPort } from '.'
import { Button } from '../..'
import './Toast.scss'

export default {
    title: 'Components/Toast',
    component: Toast,
} as Meta<typeof Toast>

type Story = StoryObj<typeof Toast>

export const Default: Story = {
    args: {
        /**The title of the alert. */
        message: 'Are you absolutely sure?',
        type: 'success',
        close: 'Close',
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

export const Error: Story = {
    args: {
        ...Default.args,
        type: 'error',
    },
}

export const Controlled: Story = {
    render: () => {
        const [open, setOpen] = useState(false)
        return (
            <>
                <ToastProvider>
                    <ToastViewPort className='ToastViewport'/>
                    <Button onClick={() => setOpen(true)}>Open</Button>
                    <Toast
                        message="Are you absolutely sure?"
                        type="primary"
                        close="Close"
                        open={open}
                        onOpenChange={setOpen}
                        action={<Button>Undo</Button>}
                    />
                </ToastProvider>
            </>
        )
    },
}
