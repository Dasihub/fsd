import { FC } from 'react'
import styles from './styles.module.less'
import { Vector } from '~shared'

export const Header: FC = () => {
	return (
		<div className={styles.header}>
			<img src={Vector} alt='vector' />
			<h1>Task</h1>
		</div>
	)
}
