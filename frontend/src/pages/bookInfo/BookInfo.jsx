import { Link, useParams } from 'react-router-dom'
import { book, headphones, author } from '../../assets'
import { styles } from '../../utils/styles'
import {
	ArrowLeftOutlined,
	StarFilled,
	StarOutlined,
	HeatMapOutlined,
	CheckCircleFilled,
} from '@ant-design/icons'
import { bookNote } from '../../utils/bookNode'
import { bookAvailability } from '../../utils/bookAvailability'
import { useContext } from 'react'
import Context from '../../context/Context'

const BooksInfo = () => {
	const { bookInfo } = useContext(Context)
	console.log(bookInfo)

	return (
		<div className='p-10 w-full min-h-screen bg-primary'>
			<Link
				to='/'
				className='max-w-[150px] flex items-center gap-[9px] cursor-pointer'
			>
				<ArrowLeftOutlined className='text-white' />
				<p className='text-white text-[15px] font-normal leading-[128.523%]'>
					Back to results
				</p>
			</Link>
			<div>
				<div className='mt-10 flex justify-center items-start gap-x-20 gap-y-10 flex-wrap'>
					<div className='px-8 py-6 bg-primaryBlack text-white text-[11px] font-[700] leading-[12px] rounded-[10px]'>
						<img
							src={bookInfo?.img}
							alt='book'
							className='max-w-[210px] h-[277px]'
						/>
						<div className={`flex items-center justify-around mt-[27px]`}>
							{bookNote &&
								bookNote.map(item => {
									return (
										<span
											key={item.id}
											className='flex flex-col items-center justify-center cursor-pointer'
										>
											<img
												src={item.img}
												alt='icons'
												className='w-[32px] h-[32px]'
											/>
											{item.title}
										</span>
									)
								})}
						</div>
					</div>
					<div>
						<h3 className='text-white text-[35px] font-normal leading-[44.983px ]'>
							{bookInfo?.title}
						</h3>
						<p className='text-white text-[15px] font-normal mt-[18px]'>
							By <span className='underline'>{bookInfo?.author}</span>,{' '}
							{bookInfo?.createdAt}
						</p>
						<p className='text-white text-[15px] font-normal mt-[5px]'>
							Second Edition
						</p>
						<div className='flex max-sm:flex-wrap gap-5 mt-5 items-center text-white text-[14px] font-semibold'>
							<span className='flex gap-3 items-center'>
								<span className='text-[#FFCB45] flex gap-[3px]'>
									<StarFilled />
									<StarFilled />
									<StarFilled />
									<StarFilled />
									<StarOutlined />
								</span>
								<p>{bookInfo?.rate} Ratings</p>
							</span>
							<p>{bookInfo?.curentlyReading} Currently reading</p>
							<p>{bookInfo?.haveRead} Have read</p>
						</div>
						<div className='flex gap-12 max-xs:gap-6 mt-[30px]'>
							<ul>
								<span className='text-white text-[14px] font-bold mb-1'>
									Availability
								</span>
								{bookAvailability &&
									bookAvailability.map(item => {
										return (
											<li key={item.id} className='flex items-center mt-2'>
												<CheckCircleFilled className='text-[#F27851]' />
												<span className='ml-2 text-white text-[15px] font-normal'>
													{item.name}
												</span>
											</li>
										)
									})}
							</ul>
							<ul>
								<span className='text-white text-[14px] font-bold'>Status</span>
								<li className='mt-4'>
									<button className='text-white text-[15px] font-normal bg-[#42BB4E] rounded-[5px] py-[5px] px-5'>
										In-Shelf
									</button>
								</li>
								<li className='flex items-center mt-3'>
									<HeatMapOutlined className='text-[#F27851]' />
									<span className='ml-2 text-white text-[15px] font-normal'>
										Audio book
									</span>
								</li>
							</ul>
						</div>
						<div className='mt-12 flex items-center gap-10 max-sm:gap-5 flex-wrap'>
							<button className='w-[200px] h-[50px] text-white bg-[#F27851] rounded-[5px] text-[20px] font-[600] leading-[12px]'>
								BORROW
							</button>
							<button
								className={`${styles.blockBetween} bg-[#41B64D] rounded-[5px] h-[50px]`}
							>
								<span
									className={`${styles.blockCenter} text-white text-[20px] font-[700] leading-[12px] px-5`}
								>
									Read Now
								</span>
								<span
									className={`${styles.blockCenter} px-5 border-l-2 border-white h-full`}
								>
									<img src={headphones} alt='headphone icon' />
								</span>
							</button>
						</div>
					</div>
					<div className='lx:max-w-[450px] p-[30px] bg-primaryBlack rounded-[10px] min-h-[300px]'>
						<div className='flex items-start justify-between'>
							<span>
								<h3 className='text-white text-[24px] font-[600] leading-[128.523%] '>
									<span className='text-[#F27851]'>About</span> Author
								</h3>
								<h4 className='text-[20px] text-white font-normal leading-[25.705px] mt-5'>
									{bookInfo?.author}
								</h4>
							</span>
							<img src={author} alt='author image' className='w-[88px]' />
						</div>
						<p className='mt-6 text-white text-[15px] font-normal leading-[19.278px]'>
							{bookInfo?.aboutAuthor}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BooksInfo
