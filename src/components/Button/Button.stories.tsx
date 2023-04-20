import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'
import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default',
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary',
  type: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary',
  type: 'secondary',
}

export const Danger = Template.bind({})
Danger.args = {
  children: 'Danger',
  type: 'danger',
}

export const Success = Template.bind({})
Success.args = {
  children: 'Success',
  type: 'success',
}

export const Ghost = Template.bind({})
Ghost.args = {
  children: 'Ghost',
  type: 'ghost',
}

export const Circular = Template.bind({})
Circular.args = {
  children: 'A',
  type: 'danger',
  circular: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Disabled',
  disabled: true,
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  children: 'Primary',
  type: 'primary',
  icon: <IoAddCircleOutline />,
}

export const CircleWithIcon = Template.bind({})
CircleWithIcon.args = {
  type: 'primary',
  circular: true,
  icon: <IoAddCircleOutline />,
}
