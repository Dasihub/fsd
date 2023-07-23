import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { Button, Input } from '~shared'
import styles from './styles.module.less'
import { FormTaskProps } from '~entities/task'

export const FormTask: FC<FormTaskProps> = ({ createTask }) => {
	const [value, setValue] = useState<string>('')

	const change = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

	const click = (e: FormEvent) => {
		e.preventDefault()

		if (value.trim().length) {
			createTask(value.trim())
			setValue('')
		}
	}

	return (
		<form className={styles.form}>
			<Input style={{ width: 400 }} value={value} onChange={change} />
			<Button style={{ width: 120 }} value='Добавить' onClick={click} />
		</form>
	)
}
