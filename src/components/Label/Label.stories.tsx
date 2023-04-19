import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Label } from '.'
import { Input } from '../Input'
import { Select } from '../Select'

export default {
  title: 'Components/Label',
  component: Label,
} as Meta<typeof Label>

type Story = StoryObj<typeof Label>

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

export const Default: Story = {
  args: {
    name: 'test',
    label: 'Label',
    children: <Select options={options} />,
  },
}

export const Side: Story = {
  args: {
    label: 'Label',
    children: <Select />,
    options: options,
    position: 'side',
  },
}

export const ForInput: Story = {
  args: {
    name: 'test',
    label: 'Label',
    children: <Input />,
    position: 'side',
    onChange: () => {
      console.log('worked?')
    },
  },
}
