import Modal from './modal/Modal'
import Navbar from './navbar/Navbar'
import { styles } from '../../utils/styles'
import { logo } from '../../assets'
import { Link } from 'react-router-dom'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'

const Header = () => {
	const [modal, setModale] = useState(false)

	const hadlerClick = () => {
		setModale(!modal)
	}

	const [width, setWidth] = useState(window.innerWidth)

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
		setModale(false)
	}

	return (
		<>
			<div
				className={`w-full h-100 relative bg-primaryBlack ${styles.blockBetween} ${styles.container}`}
			>
				<Link to='/' className='cursor-pointer'>
					<img
						src={logo}
						alt='header logo'
						className='w-[240px] max-xs:w-[160px]'
					/>
				</Link>
				<div className='max-sm:hidden'>
					<Navbar />
				</div>
				{modal ? (
					<div
						className={`${styles.blockCenter} sm:hidden `}
						onClick={hadlerClick}
					>
						<CloseOutlined className='text-primaryRed text-3xl' />
					</div>
				) : (
					<div
						className={`${styles.blockCenter} sm:hidden `}
						onClick={hadlerClick}
					>
						<MenuOutlined className='text-primaryRed text-3xl' />
					</div>
				)}
			</div>
			{modal ? <Modal /> : <></>}
		</>
	)
}

export default Header
