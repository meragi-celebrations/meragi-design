import * as RxTooltip from '@radix-ui/react-tooltip'
import React from 'react'
import { isString } from '../../utils/common'
import { Text } from '../Text'
import './Tooltip.scss'

export type TooltipProps = {
  /**
   * Children that shows tooltip on hover
   */
  children: React.ReactNode
  /**
   * Content to display in the tooltip
   */
  content: React.ReactNode
  /**
   * The preferred side of the trigger to render against when open.
   */
  side?: 'top' | 'right' | 'bottom' | 'left'
  /**
   * The preferred alignment against the trigger. May change when collisions occur.
   */
  align?: 'start' | 'center' | 'end'
}

export const Tooltip = ({
  children,
  content,
  side = 'top',
  align = 'center',
}: TooltipProps) => {
  return (
    <RxTooltip.Provider>
      <RxTooltip.Root>
        <RxTooltip.Trigger asChild>
          <div>{children}</div>
        </RxTooltip.Trigger>
        <RxTooltip.Portal>
          <RxTooltip.Content
            side={side}
            align={align}
            className="tooltip-content"
            sideOffset={5}>
            {isString(content) ? <Text>{content}</Text> : content}
            <RxTooltip.Arrow className="arrow" />
          </RxTooltip.Content>
        </RxTooltip.Portal>
      </RxTooltip.Root>
    </RxTooltip.Provider>
  )
}
