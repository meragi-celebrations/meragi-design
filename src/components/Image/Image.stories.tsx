import React from 'react';
import { Story, Meta } from '@storybook/react';

import Image, { ImageProps } from './Image';

export default {
  title: 'Image',
  component: Image,
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://dummyimage.com/600x400/000/fff',
  alt: 'Example Image',
};

export const WithFallback = Template.bind({});
WithFallback.args = {
  src: 'https://example.com/image.png',
  fallback: 'https://dummyimage.com/600x400/000/fff',
  alt: 'Example Image',
};

export const WithPreview = Template.bind({});
WithPreview.args = {
  src: 'https://dummyimage.com/600x400/000/fff',
  alt: 'Example Image',
  preview: 'https://dummyimage.com/600x400/fff/000',
};

export const WithLoader = Template.bind({});
WithLoader.args = {
  src: 'https://dummyimage.com/600x400/000/fff',
  alt: 'Example Image',
  loading: true,
};
