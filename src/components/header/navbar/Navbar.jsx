import { Link } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons'
import { useContext } from 'react'
import Context from '../../../context/Context'

const Navbar = () => {
	const { setResponseCreateBook } = useContext(Context)

	// sound-effect
	let audio = new Audio('/click-sound.wav')
	const start = () => {
		audio.play()
	}
	// handle click button
	const handleClick = () => {
		setResponseCreateBook(null)
		start()
	}

	return (
		<div className='flex gap-x-[35px] items-center cursor-pointer	'>
			<div className='flex flex-col items-center justify-center cursor-pointer'>
				<UserOutlined className='text-primaryRed text-xl' />
				<h3 className='text-base text-primaryRed font-semibold leading-5'>
					shohruz
				</h3>
			</div>
			<Link
				to='/create-book'
				className='bg-green-600 px-5 py-[14px] rounded-[6px] text-base text-white font-semibold leading-5'
				onClick={handleClick}
			>
				Create book
			</Link>
			<button className='px-5 py-[14px] bg-primaryRed rounded-[6px] text-base text-white font-semibold leading-5 cursor-pointer'>
				Log out
			</button>
		</div>
	)
}

export default Navbar
