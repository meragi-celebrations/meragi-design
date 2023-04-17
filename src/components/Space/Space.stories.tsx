import { ComponentStory, Meta } from '@storybook/react'
import React from 'react'
import { Space } from '.'

export default {
  title: 'Components/Space',
  component: Space,
} as Meta<typeof Space>

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof Space> = (args: any) => (
  <Space {...args}>
    <div>Child element 1</div>
    <div>Child element 2</div>
    <div>Child element 3</div>
  </Space>
)

export const Default = Template.bind({})
Default.args = {}
