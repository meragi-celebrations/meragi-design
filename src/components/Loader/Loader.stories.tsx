import { ComponentStory, Meta } from '@storybook/react'
import React from 'react'
import { IoBowlingBallOutline } from 'react-icons/io5'
import { Loader } from '.'

export default {
  title: 'Components/Loader',
  component: Loader,
} as Meta<typeof Loader>

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof Loader> = (args: any) => (
  <Loader {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const WithCustomIcon = Template.bind({})
WithCustomIcon.args = {
  icon: <IoBowlingBallOutline />,
}
