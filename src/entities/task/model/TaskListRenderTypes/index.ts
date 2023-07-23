import { ITask } from '~features'

export interface TaskListRenderProps {
	task: ITask[]
	deleteTask: (id: number) => void
	changeTask: (id: number) => void
}
