import Context from '../../../context/Context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {
	DeleteFilled,
	EditFilled,
	HeartFilled,
	HeartOutlined,
} from '@ant-design/icons'
import { styles } from '../../../utils/styles'

const BooksItem = ({ _id, img, title, author, createdAt, rate, like }) => {
	const { updateBookLike, deleteBook, setResponseEditBook } =
		useContext(Context)
	// title
	const sliceTitle = title.length >= 33 ? title.slice(0, 33) + '...' : title

	const date = new Date(createdAt)
	const year = date.getFullYear()

	// sound-effect
	let audio = new Audio('/click-sound.wav')
	const start = () => {
		audio.play()
	}
	// handle click button delete
	const handleClickDelete = () => {
		deleteBook(_id)
		start()
	}
	// handle click button delete
	const handleClickEdit = () => {
		setResponseEditBook(null)
		start()
	}

	return (
		<div
			className={`w-[240px] min-h-[476px] bg-primaryBlack px-6 py-4 rounded-[10px] relative`}
		>
			<div className='w-full bg-white rounded-[10px]'>
				<img
					src={img}
					alt='Book not found'
					className='w-full h-[260px] object-cover'
				/>
			</div>
			<h3 className='pt-3 text-white text-[20px] font-normal leading-[25.705px ]'>
				{sliceTitle}
			</h3>
			<p className='text-primaryRed text-base font-normal leading-[20.564px ] pt-[5px]'>
				{author}, {year}
			</p>
			<div className={`${styles.blockBetween}`}>
				<span className='text-white text-[14px] font-normal leading-[17.993px] pt-[5px]'>
					{rate}/5
				</span>
				{like ? (
					<HeartFilled
						className='text-xl text-[#F34040] cursor-pointer'
						onClick={() => updateBookLike(_id)}
					/>
				) : (
					<HeartOutlined
						className='text-xl text-white cursor-pointer'
						onClick={() => updateBookLike(_id)}
					/>
				)}
			</div>
			<div className={`${styles.blockBetween} mt-[30px]`}>
				<Link to={`/book-info/${_id}`}>
					<button
						className={`${styles.blockCenter} w-[86px] h-[35px] absolute bottom-4 left-6 px-[25px] rounded-[5px] bg-white text-primaryRed text-[16px] font-[500] leading-[16px]`}
						onClick={start}
					>
						Info
					</button>
				</Link>
				<div className='flex absolute bottom-4 right-6'>
					<Link to={`/edit-book/${_id}`}>
						<div
							className={`${styles.blockCenter} h-[35px] px-3 rounded-[5px] bg-green-600 text-white text-[12px] font-[500] leading-[16px] cursor-pointer`}
							onClick={handleClickEdit}
						>
							<EditFilled className='text-xl text-white ' />
						</div>
					</Link>
					<div
						className={`${styles.blockCenter}  h-[35px] px-3 rounded-[5px] bg-primaryRed text-white text-[12px] font-[500] leading-[16px] cursor-pointer`}
						onClick={handleClickDelete}
					>
						<DeleteFilled className='text-xl text-white ' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default BooksItem
