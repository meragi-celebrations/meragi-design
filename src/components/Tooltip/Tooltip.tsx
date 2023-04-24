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
  /**
   * The duration from when the mouse enters a tooltip trigger until the tooltip opens.
   */
  delayDuration?: number
}

/**
 * A popup that displays information related to an element when
 * the element receives keyboard focus or the mouse hovers over it.
 */
export const Tooltip = ({
  children,
  content,
  side = 'top',
  align = 'center',
  delayDuration = 700,
}: TooltipProps) => {
  return (
    <RxTooltip.Provider delayDuration={delayDuration}>
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
            {isString(content) ? <Text type="brand">{content}</Text> : content}
            <RxTooltip.Arrow className="arrow" />
          </RxTooltip.Content>
        </RxTooltip.Portal>
      </RxTooltip.Root>
    </RxTooltip.Provider>
  )
}
