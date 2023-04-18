import React from 'react'
import './Text.scss'

export interface TextProps {
  children: React.ReactNode
  variant?:
    | 'body'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body'
    | 'code'
    | 'error'
  strong?: boolean
  italic?: boolean
  link?: boolean
  href?: string
  target?: string
  rel?: string
}

export const Text: React.FC<TextProps> = ({
  strong = false,
  italic = false,
  children,
  link = false,
  href,
  target,
  rel,
  variant = 'body',
}) => {
  const classNames = `text ${variant}`

  if (link) {
    return (
      <span className={classNames}>
        <a href={href} target={target} rel={rel}>
          {strong ? (
            <strong>{italic ? <em>{children}</em> : children}</strong>
          ) : italic ? (
            <em>{children}</em>
          ) : (
            children
          )}
        </a>
      </span>
    )
  }

  return (
    <span className={classNames}>
      {strong ? (
        <strong>{italic ? <em>{children}</em> : children}</strong>
      ) : italic ? (
        <em>{children}</em>
      ) : (
        children
      )}
    </span>
  )
}

export default Text
