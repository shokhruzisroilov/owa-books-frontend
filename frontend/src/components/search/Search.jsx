import { SearchOutlined } from '@ant-design/icons'
import { styles } from '../../utils/styles'
import { useContext } from 'react'
import Context from '../../context/Context'

const Search = () => {
	const { searchBook, setSearchBook } = useContext(Context)

	return (
		<div
			className={`w-full h-[58px]  rounded-[40px] bg-primaryBlack shadow-search ${styles.blockBetween} px-8`}
		>
			<input
				type='text'
				placeholder='Search'
				className='w-full h-full outline-none bg-transparent placeholder:text-[#F27851] text-[#F27851] text-[20px] font-normal leading-[25.705px]'
				value={searchBook}
				onChange={e => setSearchBook(e.target.value)}
			/>
			<SearchOutlined className='text-xl text-[#F27851] cursor-pointer' />
		</div>
	)
}

export default Search
