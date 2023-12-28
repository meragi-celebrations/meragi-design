import { Checkbox, CheckboxProps } from '@/components/ui/checkbox';
import type { Meta, StoryObj } from '@storybook/react';
  

const meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<CheckboxProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
    description: 'You agree to our Terms of Service and Privacy Policy.',
    disabled: false,
    defaultChecked: false
  }
};

export const DefaultChecked: Story = {
  args: {
    label: 'Accept terms and conditions',
    description: 'You agree to our Terms of Service and Privacy Policy.',
    defaultChecked: true,
    disabled: false
  }
};

export const Disabled: Story = {
  args: {
    label: 'Accept terms and conditions',
    description: 'You agree to our Terms of Service and Privacy Policy.',
    disabled: true
  }
}
