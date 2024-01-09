import { Outlet } from 'react-router-dom'
import { Header } from '../components'

const Layoute = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}

export default Layoute
