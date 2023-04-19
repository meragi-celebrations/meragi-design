import React, { ReactNode } from 'react'
import { Divider, Image, Text } from '../../'
import { isString } from '../../utils/common'
import './Card.scss'

export type CardProps = {
  title?: string | ReactNode
  description?: string | ReactNode
  imageUrl?: string
  actions?: ReactNode[]
  extra?: ReactNode
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  actions,
  extra,
}) => {
  return (
    <div className="card">
      {!!extra && extra}
      {!!imageUrl && <Image src={imageUrl} className="image" />}
      <div className="content">
        <span className="title">
          {isString(title) ? <Text variant="h4">{title}</Text> : title}
        </span>
        <p className="description">
          {isString(description) ? <Text>{description}</Text> : description}
        </p>
      </div>
      {actions?.length && (
        <div className="actions-container">
          {actions?.map((action, index) => (
            <>
              <div className="action-item">{action}</div>{' '}
              {index !== actions.length - 1 && <Divider direction="vertical" />}
            </>
          ))}
        </div>
      )}
    </div>
  )
}
