import type { Meta, StoryObj } from '@storybook/react';
import { ChevronRightIcon, EnvelopeOpenIcon, ReloadIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Button',
    variant: 'destructive',
    size: 'lg'
  },
};


export const Success: Story = {
  args: {
    children: 'Button',
    variant: 'success',
    size: 'lg'
  },
};

export const Warning: Story = {
  args: {
    children: 'Button',
    variant: 'warning',
    size: 'lg'
  },
}

export const Info: Story = {
  args: {
    children: 'Button',
    variant: 'info',
    size: 'lg'
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'sm'
  },
}

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
    size: 'lg'
  },
}

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
    size: 'lg'
  },
}

export const Icon: Story = {
  args: {
    children: <ChevronRightIcon className="h-4 w-4" />,
    variant: 'outline',
    size: 'icon'
  },
}

export const WithIcon: Story = {
  args: {
    children: <><EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email</>,
  },
}

export const Loading: Story = {
  args: {
    children: <><ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
    Please wait</>,
  },
}

export const AsChild: Story = {
  args: {
    children: <a href="/login">Login</a>
  },
}