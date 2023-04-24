import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { useToast } from './useToast'
import { Toast, ToastProvider, ToastViewPort } from './Toast'
import { Button } from '../..'

import './Toast.scss'

export default {
  title: 'Hooks/useToast',
  component: Toast,
} as Meta<typeof Toast>

type Story = StoryObj<typeof Toast>

export const Default: Story = {
  render: () => {
    const { showToast, ToastContainer } = useToast()

    const handleClick = () => {
        showToast({
          message: 'Hello, world!',
          type: 'success',
        });
      };

    return (
      <>
        <ToastProvider>
          <ToastViewPort className="ToastViewport" />
          <Button onClick={handleClick}>Show toast</Button>
          <ToastContainer />
        </ToastProvider>
      </>
    )
  },
}
