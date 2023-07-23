import { FC } from 'react'
import { withProviders } from '~app/providers'
import { Routing } from '~pages'
import '~app/styles/index.less'

const App: FC = () => {
	return (
		<>
			<Routing />
		</>
	)
}

export default withProviders(App)
