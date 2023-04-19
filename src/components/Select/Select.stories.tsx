import { Meta, StoryObj } from '@storybook/react'
import { Select, animatedComponents } from './Select'

export default {
  title: 'Components/Select',
  component: Select,
} as Meta<typeof Select>

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

// Create a master template for mapping args to render the Button component
type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {
    options: options,
    isClearable: true,
    isSearchable: true,
    isMulti: false,
    isLoading: false,
    isDisabled: false,
  },
}

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
}

export const Multi: Story = {
  args: {
    ...Default.args,
    defaultValue: [options[0], options[1]],
    isMulti: true,
  },
}

export const Animated: Story = {
  args: {
    ...Multi.args,
    components: animatedComponents,
  },
}
