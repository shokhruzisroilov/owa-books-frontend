import LikeItem from './likeItem/LikeItem'
import { MenuFoldOutlined } from '@ant-design/icons'
import { styles } from '../../utils/styles'
import { useContext } from 'react'
import Context from '../../context/Context'
import { Alert, Space } from 'antd'

const SideBar = ({ setSideBar }) => {
	const { errorBookLike, booksData } = useContext(Context)
	// console.log(filterLikedBook)
	const filterLikedBook = booksData.filter(b => b.like === true)

	return (
		<div className='w-[340px] max-sm:w-full min-h-screen max-sm:absolute left-0 bg-primaryBlack max-sm:bg-primary py-[50px] px-7 slideBar max-sm:p-5 sideBar'>
			<div className={`${styles.blockBetween}`}>
				<h3 className='text-white text-[28px] max-sm:text-xl font-semibold leading-[30px]'>
					Bookmarks
				</h3>
				<MenuFoldOutlined
					className='text-primaryRed text-3xl cursor-pointer'
					onClick={() => setSideBar(false)}
				/>
			</div>
			<div className='pt-7 flex flex-col gap-5'>
				{booksData.length === 0 ? (
					<p className='text-white text-base font-semibold leading-[30px]'>
						Add your favorite books
					</p>
				) : null}

				{errorBookLike ? (
					<Space direction='vertical' style={{ width: '100%' }} className='p-5'>
						<Alert
							message={errorBookLike.response.statusText}
							type='error'
							showIcon
						/>
					</Space>
				) : null}

				{filterLikedBook &&
					filterLikedBook.map(book => {
						return (
							<LikeItem
								key={book._id}
								_id={book._id}
								img={book.img}
								title={book.title}
								author={book.author}
							/>
						)
					})}
			</div>
		</div>
	)
}

export default SideBar
