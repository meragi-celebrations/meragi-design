import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { List, ListItem } from '.'

export default {
  title: 'Components/List/ListItem',
  component: ListItem,
} as Meta<typeof ListItem>

type Story = StoryObj<typeof ListItem>

interface User {
  id: number
  name: string
  email: string
}

const dataSource: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
]

const renderItem = (user: User, index: number) => (
  <ListItem
    title={user.name}
    description={user.email}
    hover
    onClick={() => alert(`Clicked user ${user.name} (${user.email})`)}
    className="my-list-item"
  />
)

export const Default: Story = {
  render: () => (
    <div style={{ width: 700 }}>
      <List
        dataSource={dataSource}
        renderItem={(user: User, index: number) => (
          <ListItem
            title={user.name}
            description={user.email}
            hover
            onClick={() => alert(`Clicked user ${user.name} (${user.email})`)}
            className="my-list-item"
          />
        )}
      />
    </div>
  ),
}
