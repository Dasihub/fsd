import { FC } from 'react'
import { IInputProps } from './IInput'
import styles from './styles.module.less'

export const Input: FC<IInputProps> = ({
	value,
	name,
	id,
	onChange,
	style,
	type,
	placeholder,
	required,
	maxLength,
	max,
	min,
	autoComplete,
	readOnly,
	checked
}) => {
	return (
		<>
			<input
				value={value}
				onChange={onChange}
				id={id}
				name={name}
				className={styles.input}
				type={type}
				placeholder={placeholder}
				style={style}
				autoComplete={autoComplete}
				required={required}
				readOnly={readOnly}
				maxLength={maxLength}
				max={max}
				min={min}
				checked={checked}
			/>
		</>
	)
}
