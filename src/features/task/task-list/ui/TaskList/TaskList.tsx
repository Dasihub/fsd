import { FC, useEffect, useState } from 'react'
import { ITask, TaskApi } from '~features/task'
import { FormTask, TaskListRender } from '~entities'
import { Loader } from '~shared'

export const TaskList: FC = () => {
	const [loader, setLoader] = useState<boolean>(true)
	const [task, setTask] = useState<ITask[]>([])

	const getTask = async () => {
		const data = await TaskApi.getTask()
		setTask(data.map(item => ({ ...item, completed: false })))
		setLoader(false)
	}

	const createTask = (title: string) => {
		const newTask: ITask = { title, id: Date.now(), completed: false }

		setTask(pre => (pre = [...pre, newTask]))
	}

	const changeTask = (id: number) => {
		setTask(
			pre =>
				(pre = pre.map(item => {
					if (item.id === id) {
						item.completed = !item.completed
						return item
					}
					return item
				}))
		)
	}

	const deleteTask = (id: number) => {
		setTask(pre => (pre = pre.filter(item => item.id !== id)))
	}

	useEffect(() => {
		getTask()
	}, [])

	return (
		<div style={{ marginTop: 20 }}>
			<FormTask createTask={createTask} />
			{loader ? (
				<div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
					<Loader />
				</div>
			) : task.length ? (
				<TaskListRender deleteTask={deleteTask} changeTask={changeTask} task={task} />
			) : (
				<h2 style={{ marginTop: 10, textAlign: 'center', color: 'white' }}>Нет данных</h2>
			)}
		</div>
	)
}
