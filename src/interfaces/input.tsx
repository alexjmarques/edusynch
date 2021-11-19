import { InputHTMLAttributes } from 'react'
export interface InputButtonProps {
  name?: string
  children: any
  onClick?: any
  className: string
  default: boolean
}

export interface InputTextProps extends InputHTMLAttributes<HTMLElement> {
  label?: string
  name: string
  placeHolder?: string
  className: string
}

export interface RadioButtonProps {
  name: string
  value: string
  children: any
  className: string
}