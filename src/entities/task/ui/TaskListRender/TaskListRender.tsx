import { FC } from 'react'
import { TaskListRenderProps } from '~entities/task'
import { Button, Input } from '~shared'
import styles from './styles.module.less'
import { NavLink } from 'react-router-dom'
export const TaskListRender: FC<TaskListRenderProps> = ({ task, changeTask, deleteTask }) => {
	return (
		<div className={styles.task}>
			{task.map((item, index) => (
				<div className={styles.task__item}>
					<div>{++index}</div>
					<div style={item.completed ? { textDecoration: 'line-through' } : {}}>
						<NavLink className={styles.task__item__link} to={`/task/${item.id}`}>
							{item.title}
						</NavLink>
					</div>
					<div className={styles.task__item__input}>
						<Input checked={item.completed} style={{ width: 20 }} onChange={changeTask.bind(null, item.id)} type='checkbox' />
						<Button value='Удалить' style={{ fontSize: 14, width: 120 }} onClick={deleteTask.bind(null, item.id)} />
					</div>
				</div>
			))}
		</div>
	)
}
