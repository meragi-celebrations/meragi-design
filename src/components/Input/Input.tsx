import * as Label from '@radix-ui/react-label'
import classNames from 'classnames'
import React, { ChangeEvent, ReactElement, useState } from 'react'
import { Text } from '../Text'
import './Input.scss'

type InputProps = {
  name: string
  label?: string | ReactElement
  placeholder?: string
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  labelPosition?: 'top' | 'side'
  textArea?: boolean
  rows?: number
  type?: 'text' | 'number'
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: string
  defaultValue?: string | number | string[]
  error?: string | ReactElement
  showCount?: boolean
}

export const Input = ({
  name,
  label,
  placeholder,
  onChange,
  labelPosition = 'top',
  textArea = false,
  rows = 3,
  type = 'text',
  required,
  minLength,
  maxLength,
  pattern,
  defaultValue,
  error,
  showCount = false,
}: InputProps) => {
  const [charCount, setCharCount] = useState<number | null>(0)

  const inputContainerClassName = classNames('input-container', labelPosition)

  const InputElement = textArea ? 'textarea' : 'input'

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const inputText = event.target.value
    setCharCount(inputText.length)
    onChange(event)
  }

  return (
    <div className={inputContainerClassName}>
      <Label.Root className="input-label" htmlFor={name}>
        {typeof label === 'string' ? <Text>{label}</Text> : label}
        {required && <span className="required-indicator">*</span>}
      </Label.Root>
      <div className="input-field-container">
        <InputElement
          id={name}
          className={classNames('input-field', {
            error: !!error,
          })}
          rows={rows}
          type={type}
          placeholder={placeholder}
          onChange={handleInputChange}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          pattern={pattern}
          defaultValue={defaultValue}
        />
        {maxLength && showCount && (
          <div className="char-count">
            {charCount}/{maxLength}
          </div>
        )}
        {!maxLength && showCount && (
          <div className="char-count">{charCount}</div>
        )}
      </div>
      {error && (
        <div className="error-message">
          {typeof error === 'string' ? (
            <Text variant="error">{error}</Text>
          ) : (
            error
          )}
        </div>
      )}
    </div>
  )
}
