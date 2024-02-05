import { HeartOutlined } from '@ant-design/icons'
import { styles } from '../../../utils/styles'
import { Link } from 'react-router-dom'

const BooksItem = ({ img, title, author, createdAt, rate }) => {
	return (
		<div className={`max-w-[240px] min-h-[460px] bg-primaryBlack px-6 py-4 `}>
			<img src={img} alt='book' className='w-full h-[260px] object-cover' />
			<h3 className='pt-3 text-white text-[20px] font-normal leading-[25.705px ]'>
				{title}
			</h3>
			<p className='text-primaryRed text-base font-normal leading-[20.564px ] pt-[5px]'>
				{author}, {createdAt}
			</p>
			<div className={`${styles.blockBetween}`}>
				<span className='text-white text-[14px] font-normal leading-[17.993px] pt-[5px]'>
					{rate}/5
				</span>
				<HeartOutlined className='text-xl text-white cursor-pointer' />
			</div>
			<div className={`${styles.blockBetween} mt-[30px]`}>
				<Link to='/book-info'>
					<button
						className={`${styles.blockCenter} h-[25px] px-[25px] rounded-[5px] bg-white text-primaryRed text-[12px] font-[500] leading-[16px]`}
					>
						Info
					</button>
				</Link>
				<button
					className={`${styles.blockCenter} h-[25px] px-[25px] rounded-[5px] bg-primaryRed text-white text-[12px] font-[500] leading-[16px]`}
				>
					Read
				</button>
			</div>
		</div>
	)
}

export default BooksItem
