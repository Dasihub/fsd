import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ITask, TaskDetailApi } from '~features/task'
import { Loader } from '~shared'
import styles from './styles.module.less'

export const TaskDetail: FC = () => {
	const [loader, setLoader] = useState<boolean>(true)
	const [task, setTask] = useState<ITask>({ id: null, title: '', completed: false })
	const { id } = useParams<{ id: string }>()

	const getOneTask = async () => {
		const data = await TaskDetailApi.getOneTask(id)
		setTask(data)
		setLoader(false)
	}

	console.log(task)

	useEffect(() => {
		getOneTask()
	}, [])

	if (loader) {
		return <Loader isBackground />
	}

	if (task.id) {
		return (
			<div className={styles.task}>
				<div>Задача с id: {task.id}</div>
				<div>{task.title}</div>
			</div>
		)
	}

	return <h2 style={{ color: 'white', textAlign: 'center', marginTop: 30 }}>Нет данных</h2>
}
