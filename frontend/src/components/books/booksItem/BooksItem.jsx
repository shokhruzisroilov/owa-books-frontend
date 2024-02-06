import { HeartFilled, HeartOutlined } from '@ant-design/icons'
import { styles } from '../../../utils/styles'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../../../context/Context'

const BooksItem = ({ id, img, title, author, createdAt, rate, like }) => {
	const { setLikeToTrue } = useContext(Context)

	const sliceTitle = title.length >= 33 ? title.slice(0, 33) + '...' : title
	return (
		<div
			className={`max-w-[240px] min-h-[476px] bg-primaryBlack px-6 py-4 rounded-[10px] relative`}
		>
			<img src={img} alt='book' className='w-full h-[260px] object-cover' />
			<h3 className='pt-3 text-white text-[20px] font-normal leading-[25.705px ]'>
				{sliceTitle}
			</h3>
			<p className='text-primaryRed text-base font-normal leading-[20.564px ] pt-[5px]'>
				{author}, {createdAt}
			</p>
			<div className={`${styles.blockBetween}`}>
				<span className='text-white text-[14px] font-normal leading-[17.993px] pt-[5px]'>
					{rate}/5
				</span>
				{like ? (
					<HeartFilled
						className='text-xl text-[#F34040] cursor-pointer'
						onClick={() => setLikeToTrue(id)}
					/>
				) : (
					<HeartOutlined
						className='text-xl text-white cursor-pointer'
						onClick={() => setLikeToTrue(id)}
					/>
				)}
			</div>
			<div
				className={`${styles.blockBetween} gap-[17px] mt-[30px] absolute bottom-4`}
			>
				<Link to={`/book-info/${id}`}>
					<button
						className={`${styles.blockCenter} w-[86px] h-[25px] px-[25px] rounded-[5px] bg-white text-primaryRed text-[12px] font-[500] leading-[16px]`}
					>
						Info
					</button>
				</Link>
				<button
					className={`${styles.blockCenter} w-[86px] h-[25px] px-[25px] rounded-[5px] bg-primaryRed text-white text-[12px] font-[500] leading-[16px]`}
				>
					Read
				</button>
			</div>
		</div>
	)
}

export default BooksItem
