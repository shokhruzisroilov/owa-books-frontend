import { SearchOutlined } from '@ant-design/icons'
import { styles } from '../../utils/styles'

const Search = () => {
	return (
		<div className='px-[60px] max-sm:px-5 max-md:px-5'>
			<div
				className={`w-full h-[58px]  rounded-[40px] bg-primaryBlack shadow-search ${styles.blockBetween} px-8`}
			>
				<input
					type='text'
					placeholder='Search'
					className='w-full h-full outline-none bg-transparent placeholder:text-[#F27851] text-[#F27851] text-[20px] font-normal leading-[25.705px]'
				/>
				<SearchOutlined className='text-xl text-[#F27851] cursor-pointer' />
			</div>
		</div>
	)
}

export default Search
