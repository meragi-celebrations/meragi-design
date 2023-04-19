import * as RadixLabel from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
import classNames from 'classnames'
import React, { ReactElement, ReactNode } from 'react'
import { Text } from '../Text'
import './Label.scss'

export type LabelProps = {
  name?: string
  label?: string | ReactNode
  position?: 'top' | 'side'
  children: ReactElement
  [x: string]: any
}

/**
 * Wraps any input to add label component to it.
 * All the input props can be directly added to the component
 * and they will be propagated to the child input
 */
export const Label = ({
  name,
  label,
  position = 'top',
  ...restProps
}: LabelProps) => {
  const containerClass = classNames('label', position)

  return (
    <div className={containerClass}>
      <RadixLabel.Root className="label-text" htmlFor={name}>
        {typeof label === 'string' ? <Text>{label}</Text> : label}
      </RadixLabel.Root>
      <div className="input-container">
        <Slot {...{ name: name, ...restProps }} />
      </div>
    </div>
  )
}
