import { sun } from '../../../assets'
import { UserOutlined } from '@ant-design/icons'

const Navbar = () => {
	return (
		<div className='flex gap-x-[35px] items-center'>
			<img
				src={sun}
				alt='sun dark icon'
				className='cursor-pointer w-[26px] h-[26px]'
			/>
			<div className='flex flex-col items-center justify-center cursor-pointer'>
				<UserOutlined className='text-primaryRed text-xl' />
				<h3 className='text-base text-primaryRed font-semibold leading-5'>
					shohruz
				</h3>
			</div>
			<button className='px-10 py-[14px] bg-primaryRed rounded-[6px] text-bas text-white font-semibold leading-5 cursor-pointer'>
				Log out
			</button>
		</div>
	)
}

export default Navbar
