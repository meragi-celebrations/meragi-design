import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { IoCopyOutline, IoTrashBinOutline } from 'react-icons/io5'
import { Tree } from '.'
import { Button } from '../Button'

export default {
  title: 'Components/Tree',
  component: Tree,
} as Meta<typeof Tree>

type Story = StoryObj<typeof Tree>

type Data = {
  id: number
}

const extraData: Data = {
  id: 2,
}

const treeData = [
  {
    id: 1,
    label: 'Floral',
    children: [
      {
        id: 2,
        label: 'Child 1.1',
        extra: extraData,
        actions: [
          <Button
            size="x-small"
            type="ghost"
            color="primary"
            icon={<IoCopyOutline />}
            onClick={() => console.log('Copy')}
          />,
          <Button
            size="x-small"
            type="ghost"
            color="primary"
            icon={<IoTrashBinOutline />}
          />,
        ],
        children: [
          {
            id: 3,
            label: 'Grandchild 1.1.1',
            actions: [
              <Button
                size="x-small"
                type="ghost"
                icon={<IoCopyOutline />}
                onClick={() => console.log('Copy')}
              />,
              <Button
                size="x-small"
                type="ghost"
                icon={<IoTrashBinOutline />}
              />,
            ],
          },
          {
            id: 4,
            label: 'Grandchild 1.1.2',
          },
        ],
      },
      {
        id: 5,
        label: 'Child 1.2',
        children: [
          {
            id: 6,
            label: 'Grandchild 1.2.1',
          },
          {
            id: 7,
            label: 'Grandchild 1.2.2',
          },
        ],
      },
    ],
  },
  {
    id: 8,
    label: 'Foliage',
    children: [
      {
        id: 9,
        label: 'Child 2.1',
        children: [
          {
            id: 10,
            label: 'Grandchild 2.1.1',
          },
          {
            id: 11,
            label: 'Grandchild 2.1.2',
          },
        ],
      },
    ],
  },
]

export const Default: Story = {
  render: () => (
    <div style={{ width: 300, height: 250 }}>
      <Tree<Data>
        data={treeData}
        onSelect={(item) => console.log(`Selected item with ID ${item.id}`)}
        initialExpandedItems={[2]}
      />
    </div>
  ),
}
