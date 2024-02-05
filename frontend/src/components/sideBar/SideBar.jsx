import LikeItem from './likeItem/LikeItem'
import { MenuFoldOutlined } from '@ant-design/icons'
import { styles } from '../../utils/styles'
import { useContext } from 'react'
import Context from '../../context/Context'

const SideBar = ({ setSideBar }) => {
	const { booksData } = useContext(Context)
	// console.log(booksData)
	// Filter sidebar books
	const filterLikedBook = booksData?.filter(item => item.like === true)
	// console.log(filterLikedBook)

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
				{filterLikedBook &&
					filterLikedBook.map(book => {
						return (
							<LikeItem
								key={book.id}
								id={book.id}
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
