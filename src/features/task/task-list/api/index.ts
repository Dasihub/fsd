import { api } from '~shared'
import { ITask } from '~features/task'

class TaskApi {
	async getTask(): Promise<ITask[]> {
		return await api('/posts?_limit=10')
	}
}

export default new TaskApi()
