import { styles } from '../../../utils/styles'
import { HeartFilled } from '@ant-design/icons'
import { useContext } from 'react'
import Context from '../../../context/Context'

const LikeItem = ({ id, img, title, author }) => {
	const { getBookLike } = useContext(Context)

	const sliceTitle = title.length >= 13 ? title.slice(0, 13) + '...' : title
	return (
		<div
			className={`${styles.blockCenter} w-[284px] gap-[25px] rounded-[10px] bg-likesColor p-[10px]`}
		>
			<div className='w-[75px] h-[100px] object-cover'>
				<img
					src={img}
					alt='book'
					className='w-[75px] h-[100px] rounded-[5px] object-cover border-[1px] border-[#F1F1F1]'
				/>
			</div>
			<div className='min-w-[160px]'>
				<h3 className='text-[20px]  text-white font-semibold leading-[25.705px]'>
					{sliceTitle}
				</h3>
				<p className={`${styles.label} mt-3`}>{author}</p>
				<HeartFilled
					className='text-xl text-[#F34040] cursor-pointer'
					onClick={() => getBookLike(id)}
				/>
			</div>
		</div>
	)
}

export default LikeItem
