import React from 'react'
import BaseSelect, { Props as BaseProps, GroupBase } from 'react-select'
import makeAnimated from 'react-select/animated'
import './Select.scss'

export type SelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = BaseProps<Option, IsMulti, Group> & { name?: string }

/**
 * Extends react-select to add our styling.
 * For further reference see https://react-select.com/home
 */
export const Select = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  name,
  ...props
}: SelectProps<Option, IsMulti, Group>) => {
  return <BaseSelect classNamePrefix="select" id={name} {...props} />
}

export const animatedComponents = makeAnimated()
