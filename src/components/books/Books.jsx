import BooksItem from './booksItem/BooksItem'

const Books = ({ searchBookData }) => {
	return (
		<div className='flex flex-wrap justify-center mt-10 gap-6'>
			{searchBookData &&
				searchBookData.map(book => {
					return <BooksItem key={book.id} {...book} />
				})}
		</div>
	)
}

export default Books
