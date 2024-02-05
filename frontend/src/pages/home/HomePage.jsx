import { Search, SideBar, Books } from '../../components'
import { MenuUnfoldOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { styles } from '../../utils/styles'
import BooksService from '../../services/books'

const HomePage = () => {
	const [booksData, setBooksData] = useState(null)
	console.log(booksData)
	// const [error, serError] = useState(null)

	const [sideBar, setSideBar] = useState(false)
	const [width, setWidth] = useState(window.innerWidth)

	const getBooks = async () => {
		try {
			const response = await BooksService.getBooks()
			setBooksData(response)
		} catch (error) {
			console.error(error)
		}
	}
	useEffect(() => {
		getBooks()
	}, [])

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth)
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [width])

	useEffect(() => {
		width > 768 && handleSideNavToggle()
	}, [width])

	function handleSideNavToggle() {
		setSideBar(true)
	}

	return (
		<div
			className={`${styles.blockStart} ${
				sideBar ? 'bg-primaryBlack' : 'bg-primary'
			}`}
		>
			{sideBar ? (
				<SideBar setSideBar={setSideBar} />
			) : (
				<MenuUnfoldOutlined
					className='text-primaryRed text-3xl cursor-pointer pl-7 max-sm:pl-2 py-10'
					onClick={() => setSideBar(true)}
				/>
			)}

			<div
				className={`bg-primary w-full min-h-screen flex justify-center ${
					sideBar ? 'max-sm:hidden' : 'flex'
				}`}
			>
				<div className='w-full p-8 max-sm:px-4'>
					<Search />
					<Books booksData={booksData} />
				</div>
			</div>
		</div>
	)
}

export default HomePage
