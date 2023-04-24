import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Toast, ToastProvider, ToastViewPort } from '.'
import { Button } from '../..'
import './Toast.scss'
import { FaRegWindowClose } from 'react-icons/fa'

export default {
  title: 'Components/Toast',
  component: Toast,
} as Meta<typeof Toast>

type Story = StoryObj<typeof Toast>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <ToastProvider>
          <ToastViewPort className="ToastViewport" />
          <Button onClick={() => setOpen(true)}>Open</Button>
          <Toast
            message="Are you absolutely sure?"
            type="default"
            closeable={true}
            open={open}
            onOpenChange={setOpen}
          />
        </ToastProvider>
      </>
    )
  },
}

export const Sucess: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <ToastProvider>
          <ToastViewPort className="ToastViewport" />
          <Button type="success" onClick={() => setOpen(true)}>
            Open
          </Button>
          <Toast
            message="Are you absolutely sure?"
            type="success"
            closeable={true}
            open={open}
            onOpenChange={setOpen}
          />
        </ToastProvider>
      </>
    )
  },
}

export const Danger: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <ToastProvider>
          <ToastViewPort className="ToastViewport" />
          <Button type="danger" onClick={() => setOpen(true)}>
            Delete
          </Button>
          <Toast
            message="Are you absolutely sure?"
            type="danger"
            closeable={true}
            open={open}
            onOpenChange={setOpen}
          />
        </ToastProvider>
      </>
    )
  },
}

export const Warning: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <ToastProvider>
          <ToastViewPort className="ToastViewport" />
          <Button type="warning" onClick={() => setOpen(true)}>
            Warning
          </Button>
          <Toast
            message="Are you absolutely sure?"
            type="warning"
            closeable={true}
            open={open}
            onOpenChange={setOpen}
          />
        </ToastProvider>
      </>
    )
  },
}

export const Info: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <ToastProvider>
          <ToastViewPort className="ToastViewport" />
          <Button type="info" onClick={() => setOpen(true)}>
            Info
          </Button>
          <Toast
            message="Are you absolutely sure?"
            type="info"
            closeable={true}
            open={open}
            onOpenChange={setOpen}
          />
        </ToastProvider>
      </>
    )
  },
}

export const Primary: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <ToastProvider>
          <ToastViewPort className="ToastViewport" />
          <Button type="primary" onClick={() => setOpen(true)}>
            Primary
          </Button>
          <Toast
            message="Are you absolutely sure?"
            type="primary"
            closeable={true}
            open={open}
            onOpenChange={setOpen}
          />
        </ToastProvider>
      </>
    )
  },
}

export const CustomIcon: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <ToastProvider>
          <ToastViewPort className="ToastViewport" />
          <Button onClick={() => setOpen(true)}>Custom Close Icon</Button>
          <Toast
            message="Are you absolutely sure?"
            closeable={true}
            open={open}
            onOpenChange={setOpen}
            closeIcon={<FaRegWindowClose />}
          />
        </ToastProvider>
      </>
    )
  },
}

export const WithPromise: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <ToastProvider>
          <ToastViewPort className="ToastViewport" />
          <Button onClick={() => setOpen(true)}>With Promise</Button>
          <Toast
            message="Are you absolutely sure?"
            closeable={true}
            open={open}
            onOpenChange={setOpen}
            promise={new Promise((resolve) => setTimeout(resolve, 3000))}
          />
        </ToastProvider>
      </>
    )
  },
}
