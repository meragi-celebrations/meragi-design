import React from 'react';
import { Meta, storiesOf } from '@storybook/react';
import Badge, { BadgeProps } from './Badge';
import { FaAd } from 'react-icons/fa';
import { IoAddCircleOutline } from 'react-icons/io5';

export default {
    title: 'Components/Badge',
    component: Badge,
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: {
                type: 'text',
            },
        },
        type: {
            control: {
                type: 'select',
                options: ['text'],
            },
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'default'],
            },
        },
        color: {
            control: {
                type: 'select',
                options: ['info', 'success', 'warning', 'danger', 'primary', 'secondary', 'default'],
            },
        },
        variant: {
            control: {
                type: 'select',
                options: ['default', 'faded', 'outlined', 'rounded'],
            },
        },
        rounded: {
            control: {
                type: 'boolean',
            }
        },
        letterCase: {
            control: {
                type: 'select',
                options: ['upper', 'lower', 'capitalize', 'none'],
            }
        }
    },
    parameters: {
        componentSubtitle: 'Badge',
    },
  } as Meta<typeof Badge>;

export const Default = (args: JSX.IntrinsicAttributes & BadgeProps) => <Badge {...args} />;
Default.args = {
    value: 1,
    type: 'text',
};

export const Number = (args: JSX.IntrinsicAttributes & BadgeProps) => <Badge {...args} />;
Number.args = {
    value: 1,
    type: 'text',
    size: 'default',
    color: 'default',
    variant: 'default',
};

export const Text = (args: JSX.IntrinsicAttributes & BadgeProps) => <Badge {...args} />;
Text.args = {
    value: 'New',
    type: 'text',
    size: 'default',
    color: 'default',
    variant: 'default',
};

export const Small = (args: JSX.IntrinsicAttributes & BadgeProps) => <Badge {...args} />;
Small.args = {
    value: 1,
    type: 'text',
    size: 'small',
    color: 'default',
    variant: 'default',
};

export const Faded = (args: JSX.IntrinsicAttributes & BadgeProps) => <Badge {...args} />;
Faded.args = {
    value: 1,
    type: 'text',
    size: 'default',
    color: 'default',
    variant: 'faded',
};

export const Outlined = (args: JSX.IntrinsicAttributes & BadgeProps) => <Badge {...args} />;
Outlined.args = {
    value: 1,
    type: 'text',
    size: 'default',
    color: 'default',
    variant: 'outlined',
};

export const Rounded = (args: JSX.IntrinsicAttributes & BadgeProps) => <Badge {...args} />;
Rounded.args = {
    value: 1,
    type: 'text',
    size: 'default',
    color: 'default',
    variant: 'rounded',
};


export const Icon = (args: JSX.IntrinsicAttributes & BadgeProps) => <Badge {...args} />;
Icon.args = {
    value: 1,
    type: 'text',
    size: 'default',
    color: 'success',
    variant: 'default',
    icon: <IoAddCircleOutline />,
};