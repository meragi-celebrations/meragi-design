import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { Button } from "./Button"

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} onClick={() => {}} />
)

// Reuse that template for creating different stories
export const Primary = Template.bind({})
Primary.args = {
  children: "Primary 😃",
  type: "primary",
  size: "lg",
  disabled: true,
}

export const Secondary = Template.bind({})
Secondary.args = { children: "Secondary 😇" }

export const Danger = Template.bind({})
Danger.args = { children: "Danger", type: "danger" }

export const Outlined = Template.bind({})
Outlined.args = { children: "Outlined", outlined: true }
