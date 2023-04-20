import React from 'react'
import { FaSpinner } from 'react-icons/fa'
import './Loader.scss'

export interface LoaderProps {
  size?: string
  color?: string
  icon?: any
}

export const Loader = ({ size = '.5em', color, icon }: LoaderProps) => {
  console.log(size, icon)
  return (
    <div className="loading-icon">
      {!!icon ? icon : <FaSpinner size={size} color={color} />}
    </div>
  )
}
