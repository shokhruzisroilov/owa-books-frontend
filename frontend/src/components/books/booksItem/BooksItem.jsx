import { book } from '../../../assets'
import { HeartOutlined } from '@ant-design/icons'
import { styles } from '../../../utils/styles'

const BooksItem = () => {
	return (
		<div className={`max-w-[240px] min-h-[460px] bg-primaryBlack px-6 py-4`}>
			<img src={book} alt='book' className='w-full h-[260px] object-cover' />
			<h3 className='pt-3 text-white text-[20px] font-normal leading-[25.705px ]'>
				Don’t Make Me think
			</h3>
			<p className='text-primaryRed text-base font-normal leading-[20.564px ] pt-[5px]'>
				Steve Krug, 2000
			</p>
			<div className={`${styles.blockBetween}`}>
				<span className='text-white text-[14px] font-normal leading-[17.993px] pt-[5px]'>
					4.5/5
				</span>
				<HeartOutlined className='text-xl text-white cursor-pointer' />
			</div>
			<div className={`${styles.blockBetween} mt-[30px]`}>
				<button
					className={`${styles.blockCenter} h-[25px] px-[25px] rounded-[5px] bg-white text-primaryRed text-[12px] font-[500] leading-[16px]`}
				>
					Info
				</button>
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
