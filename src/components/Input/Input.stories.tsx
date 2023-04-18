import { ComponentStory, Meta } from '@storybook/react'
import React from 'react'
import { Input } from '.'
import { Text } from '../Text'

export default {
  title: 'Components/Input',
  component: Input,
} as Meta<typeof Input>

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof Input> = (args: any) => (
  <Input {...args} name="test" />
)

export const Default = Template.bind({})
Default.args = {
  label: 'Label',
  placeholder: 'Placeholder',
}

export const CustomLabel = Template.bind({})
CustomLabel.args = {
  label: <Text italic>Custom</Text>,
}

export const LabelPosition = Template.bind({})
LabelPosition.args = {
  label: <Text italic>Custom</Text>,
  labelPosition: 'side',
}

export const ErrorMessage = Template.bind({})
ErrorMessage.args = {
  label: 'With Error',
  labelPosition: 'side',
  required: true,
  error: 'This field is required',
}

export const CharCount = Template.bind({})
CharCount.args = {
  label: 'Count',
  labelPosition: 'top',
  required: true,
  textArea: true,
  showCount: true,
}

export const CharCountWithMaxLength = Template.bind({})
CharCountWithMaxLength.args = {
  label: 'Count',
  labelPosition: 'top',
  required: true,
  textArea: true,
  showCount: true,
  maxLength: 250,
}
