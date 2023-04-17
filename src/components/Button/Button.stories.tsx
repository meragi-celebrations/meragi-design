import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { Button } from "./Button"
export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: "Primary :smiley:",
  size: "large",
  disabled: true,
}