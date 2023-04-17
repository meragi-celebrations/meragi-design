import React from 'react';
import { Story, Meta } from '@storybook/react';
import Text, { TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Body = Template.bind({});
Body.args = {
  children: 'Body Text',
};

export const Heading1 = Template.bind({});
Heading1.args = {
  children: 'Heading 1',
  variant: 'h1',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  children: 'Heading 2',
  variant: 'h2',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  children: 'Heading 3',
  variant: 'h3',
};

export const Heading4 = Template.bind({});
Heading4.args = {
  children: 'Heading 4',
  variant: 'h4',
};

export const Heading5 = Template.bind({});
Heading5.args = {
  children: 'Heading 5',
  variant: 'h5',
};

export const Heading6 = Template.bind({});
Heading6.args = {
  children: 'Heading 6',
  variant: 'h6',
};

export const Code = Template.bind({});
Code.args = {
  children: 'Code',
  variant: 'code',
};

export const Strong = Template.bind({});
Strong.args = {
    children: 'Strong',
  strong: true,
};

export const Italic = Template.bind({});
Italic.args = {
    children: 'Italics',
  italic: true,
};

export const StrongAndItalic = Template.bind({});
StrongAndItalic.args = {
    children: 'Strong & Italics',
  strong: true,
  italic: true,
};

export const Link = Template.bind({});
Link.args = {
  link: true,
  href: 'https://www.meragi.com',
  children: 'Link text',
};