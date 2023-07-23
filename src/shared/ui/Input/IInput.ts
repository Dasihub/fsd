import { ChangeEvent, CSSProperties } from 'react'

export interface IInputProps {
	type?: 'text' | 'password' | 'email' | 'number' | 'checkbox'
	id?: string
	style?: CSSProperties
	name?: string
	value?: string
	placeholder?: string
	required?: boolean
	readOnly?: boolean
	maxLength?: number
	max?: number
	checked?: boolean
	min?: number
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	autoComplete?: 'off' | 'on'
}
