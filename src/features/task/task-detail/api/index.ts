import { api } from '~shared'
import { ITask } from '~features/task'

class TaskDetailApi {
	async getOneTask(id?: string): Promise<ITask> {
		return await api(`/posts/${id}`)
	}
}

export default new TaskDetailApi()
