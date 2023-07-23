import { FC } from 'react'
import { TaskList } from '~features'
import { Header } from '~widgets'

export const TaskListPages: FC = () => {
	return (
		<>
			<Header />
			<TaskList />
		</>
	)
}
