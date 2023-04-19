import { Meta, StoryObj } from '@storybook/react'

import { Image } from './Image'

export default {
  title: 'components/Image',
  component: Image,
} as Meta

type Story = StoryObj<typeof Image>

export const Default: Story = {
  args: {
    src: 'https://dummyimage.com/600x400/000/fff',
    alt: 'Example Image',
  },
}

export const Fallback: Story = {
  args: {
    src: 'https://example.com/600x400/000/fff',
    alt: 'Example Image',
    fallbackSrc: 'https://dummyimage.com/600x400/000/fff',
  },
}
