import { styles } from '../../../utils/styles'
import { book } from '../../../assets'
import { HeartFilled } from '@ant-design/icons'

const LikeItem = () => {
	return (
		<div
			className={`${styles.blockCenter} w-[284px] gap-[25px] rounded-[10px] bg-likesColor p-[10px]`}
		>
			<img
				src={book}
				alt='book'
				className='w-[75px] rounded-[5px] border-[1px] border-[#F1F1F1]'
			/>
			<div>
				<h3 className='text-[20px] text-white font-semibold leading-[25.705px]'>
					Don’t Make Me...
				</h3>
				<p className={`${styles.label} mt-3`}>Steve Krug</p>
				<HeartFilled className='text-xl text-[#F34040] cursor-pointer' />
			</div>
		</div>
	)
}

export default LikeItem
