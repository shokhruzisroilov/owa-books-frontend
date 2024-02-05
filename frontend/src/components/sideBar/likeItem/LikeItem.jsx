import { styles } from '../../../utils/styles'
import { HeartFilled } from '@ant-design/icons'
import { useContext } from 'react'
import Context from '../../../context/Context'

const LikeItem = ({ id, img, title, author }) => {
	const { setLikeToTrue } = useContext(Context)
	const sliceTitle = title.length >= 13 ? title.slice(0, 13) + '...' : title
	return (
		<div
			className={`${styles.blockCenter} w-[284px] gap-[25px] rounded-[10px] bg-likesColor p-[10px]`}
		>
			<img
				src={img}
				alt='book'
				className='w-[75px] rounded-[5px] border-[1px] border-[#F1F1F1]'
			/>
			<div>
				<h3 className='text-[20px] text-white font-semibold leading-[25.705px]'>
					{sliceTitle}
				</h3>
				<p className={`${styles.label} mt-3`}>{author}</p>
				<HeartFilled
					className='text-xl text-[#F34040] cursor-pointer'
					onClick={() => setLikeToTrue(id)}
				/>
			</div>
		</div>
	)
}

export default LikeItem
