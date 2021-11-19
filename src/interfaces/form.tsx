/**
 * Por possuir poucoas Intefaces agrupei todas em uma só pagina, mas o ideal e 
 * trabalhar com uma divisão de acordo com cada 
 * elemento e suas funcionalidades
 * 
 */
import { InputHTMLAttributes } from 'react'
export interface FormProps {
  className: string
  children: any
  onSubmit?: any
}