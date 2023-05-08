import React from 'react'
import { isString } from '../../utils/common'
import { Divider } from '../Divider'
import { Image } from '../Image'
import { Text } from '../Text'
import './Card.scss'

export type CardProps = {
  /**
   * The title to display in the card.
   * This can be a simple string or a more complex React node.
   */
  title?: string | React.ReactNode
  /**
   * The description to display in the card.
   * This can be a simple string or a more complex React node.
   */
  description?: string | React.ReactNode
  /**
   * The URL of the image to display in the card.
   */
  imageUrl?: string
  /**
   * An array of action elements to display in the card.
   * These can be any valid React nodes.
   */
  actions?: React.ReactNode[]
  /**
   * Any extra content to display in the card.
   * This can be any valid React node.
   */
  extra?: React.ReactNode
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  actions,
  extra,
}) => {
  return (
    <div className="md-card">
      {!!extra && extra}
      {!!imageUrl && <Image src={imageUrl} className="image" />}
      <div className="card-content">
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
              {index !== actions.length - 1 && (
                <Divider direction="vertical" applyMargin={false} />
              )}
            </>
          ))}
        </div>
      )}
    </div>
  )
}
