const isDev: boolean = process.env.NODE_ENV === 'development'

const basesURL = 'https://jsonplaceholder.typicode.com'

type tMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export const api = async (url: string, method: tMethod = 'GET', body: any = null, headers: any = {}) => {
	try {
		if (body) {
			headers['Content-Type'] = 'application/json'
		}

		const res: Response = await fetch(basesURL + url, {
			method,
			body,
			headers,
			credentials: isDev ? 'include' : 'omit'
		})

		return await res.json()
	} catch (e) {
		console.log(e)
	}
}
