import {
	HomePage,
	Login,
	Register,
	NotFountPage,
	BookInfo,
	CreateBook,
} from './pages'
import Layoute from './layouts/Layoute'

import { Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

const App = () => {
	// const [token, setToken] = useState(localStorage.getItem('owa-book-token'))
	return (
		<>
			<Routes>
				<Route path='/' element={<Layoute />}>
					{/* <Route path='/' element={token ? <Layoute /> : <Login />}> */}
					<Route index element={<HomePage />} />
					<Route path='/book-info/:bookId' element={<BookInfo />} />
					<Route path='/create-book' element={<CreateBook />} />
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/*' element={<NotFountPage />} />
			</Routes>
		</>
	)
}

export default App
