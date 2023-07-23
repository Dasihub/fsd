import { ReactNode, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Loader } from '~shared'

export const withRouter = (component: () => ReactNode) => () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loader isBackground />}>{component()}</Suspense>
		</BrowserRouter>
	)
}
