import { Link } from 'react-router-dom'
import { book, headphones, author, share, notes, reviews } from '../../assets'
import { styles } from '../../utils/styles'
import {
	ArrowLeftOutlined,
	StarFilled,
	StarOutlined,
	HeatMapOutlined,
	CheckCircleFilled,
} from '@ant-design/icons'

const BooksInfo = () => {
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
						<img src={book} alt='book' className='max-w-[210px] h-[277px]' />
						<div className={`flex items-center justify-around mt-[27px]`}>
							<span className='flex flex-col items-center justify-center cursor-pointer'>
								<img src={reviews} alt='icons' className='w-[32px] h-[32px]' />
								Review
							</span>
							<span className='flex flex-col items-center justify-center cursor-pointer'>
								<img src={notes} alt='icons' className='w-[32px] h-[32px]' />
								Notes
							</span>
							<span className='flex flex-col items-center justify-center cursor-pointer'>
								<img src={share} alt='icons' className='w-[32px] h-[32px]' />
								Share
							</span>
						</div>
					</div>
					<div>
						<h3 className='text-white text-[35px] font-normal leading-[44.983px ]'>
							fkldsjafkldsja
						</h3>
						<p className='text-white text-[15px] font-normal mt-[18px]'>
							By <span className='underline'>Steve Krug</span>, 2000
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
								<p>4.0 Ratings</p>
							</span>
							<p>25 Currently reading</p>
							<p>119 Have read</p>
						</div>
						<div className='flex gap-12 max-xs:gap-6 mt-[30px]'>
							<ul>
								<span className='text-white text-[14px] font-bold mb-1'>
									Availability
								</span>
								<li className='flex items-center mt-2'>
									<CheckCircleFilled className='text-[#F27851]' />
									<span className='ml-2 text-white text-[15px] font-normal'>
										Hard Copy
									</span>
								</li>
								<li className='flex items-center mt-2'>
									<CheckCircleFilled className='text-[#F27851]' />
									<span className='ml-2 text-white text-[15px] font-normal'>
										Hard Copy
									</span>
								</li>
								<li className='flex items-center mt-2'>
									<CheckCircleFilled className='text-[#F27851]' />
									<span className='ml-2 text-white text-[15px] font-normal'>
										E - Book
									</span>
								</li>
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
									Steve Krug
								</h4>
							</span>
							<img src={author} alt='author image' className='w-[88px]' />
						</div>
						<p className='mt-6 text-white text-[15px] font-normal leading-[19.278px]'>
							Steve Krug is a usability consultant who has more than 30 years of
							experience as a user advocate for companies like Apple, Netscape,
							AOL, Lexus, and others. Based in part on the success of his first
							book, Don't Make Me Think, he has become a highly sought-after
							speaker on usability design.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BooksInfo
