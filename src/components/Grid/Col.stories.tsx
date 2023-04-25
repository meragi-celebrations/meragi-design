import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Col, Row } from '.'

export default {
  title: 'Components/Grid/Col',
  component: Col,
} as Meta<typeof Col>

type Story = StoryObj<typeof Col>

export const Default: Story = {
  render: () => (
    <div style={{ width: '90vw' }}>
      <Row>
        <Col span={2} style={{ backgroundColor: 'red' }}>
          Column 1
        </Col>
        <Col span={10} style={{ backgroundColor: 'yellow' }}>
          Column 2
        </Col>
        <Col span={12} style={{ backgroundColor: 'green' }}>
          Column 3
        </Col>
      </Row>
      <Row>
        <Col span={2} style={{ backgroundColor: 'red' }}>
          Column 1
        </Col>
        <Col span={10} style={{ backgroundColor: 'yellow' }}>
          Column 2
        </Col>
        <Col span={12} style={{ backgroundColor: 'green' }}>
          Column 3
        </Col>
      </Row>
    </div>
  ),
}
