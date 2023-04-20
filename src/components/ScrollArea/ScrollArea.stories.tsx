import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ScrollArea } from '.'

export default {
  title: 'Components/ScrollArea',
  component: ScrollArea,
} as Meta<typeof ScrollArea>

type Story = StoryObj<typeof ScrollArea>

const TAGS = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
)

export const Vertical: Story = {
  render: () => (
    <ScrollArea>
      <div style={{ width: 300, height: 225, padding: '15px 20px' }}>
        <div className="Text">Tags</div>
        {TAGS.map((tag) => (
          <div className="Tag" key={tag}>
            {tag}
          </div>
        ))}
      </div>{' '}
    </ScrollArea>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <ScrollArea>
      <div style={{ display: 'flex', width: 300, padding: '15px 20px' }}>
        <div className="Text">Tags</div>
        {TAGS.map((tag) => (
          <div className="Tag" key={tag}>
            {tag}
          </div>
        ))}
      </div>{' '}
    </ScrollArea>
  ),
}
