import * as RadixScrollArea from '@radix-ui/react-scroll-area'
import React, { ReactNode } from 'react'
import './ScrollArea.scss'

type ScrollAreaProps = {
  children: ReactNode
}

export const ScrollArea = ({ children }: ScrollAreaProps) => {
  return (
    <RadixScrollArea.Root className="scroll-area">
      <RadixScrollArea.Viewport className="viewport">
        {children}
      </RadixScrollArea.Viewport>
      <RadixScrollArea.Scrollbar className="scroll-bar" orientation="vertical">
        <RadixScrollArea.Thumb className="thumb" />
      </RadixScrollArea.Scrollbar>
      <RadixScrollArea.Scrollbar
        className="scroll-bar"
        orientation="horizontal">
        <RadixScrollArea.Thumb className="thumb" />
      </RadixScrollArea.Scrollbar>
      <RadixScrollArea.Corner className="corner" />
    </RadixScrollArea.Root>
  )
}
