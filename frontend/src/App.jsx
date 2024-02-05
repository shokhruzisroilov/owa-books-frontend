import { HomePage, Login, Register, NotFountPage, BookInfo } from './pages'
import Layoute from './layouts/Layoute'

import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

const App = () => {
	const [token, setToken] = useState(localStorage.getItem('owa-book-token'))
	return (
		<>
			<Routes>
				<Route path='/' element={<Layoute />}>
					{/* <Route path='/' element={token ? <Layoute /> : <Login />}> */}
					<Route index element={<HomePage />} />
					<Route path='/book-info' element={<BookInfo />} />
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/*' element={<NotFountPage />} />
			</Routes>
		</>
	)
}

export default App
