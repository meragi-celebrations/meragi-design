import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { GridSelect } from '.'
import { Card } from '../Card'
import { Input } from '../Input'
import { Text } from '../Text'

export default {
  title: 'Components/GridSelect',
  component: GridSelect,
} as Meta<typeof GridSelect>

type Story = StoryObj<typeof GridSelect>

interface User {
  id: number
  name: string
  email: string
}

const dataSource: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  { id: 4, name: 'Mayank', email: 'Mayank@example.com' },
]

export const Default: Story = {
  render: () => {
    return (
      <GridSelect
        title="Select Items"
        dataSource={dataSource}
        getId={(item) => item.id}
        defaultSelected={[2]}
        extra={
          <>
            <Input placeholder="Search" />
          </>
        }
        renderItem={(item, index, selected) => (
          <Card
            title={
              <Text type={selected.includes(item.id) ? 'success' : 'warning'}>
                {item.name}
              </Text>
            }
            description={item.email}
          />
        )}
        onChange={(item, selected) => console.log(item, selected)}
      />
    )
  },
}
