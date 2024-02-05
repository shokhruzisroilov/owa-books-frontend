import BooksItem from './booksItem/BooksItem'

const Books = ({ booksData }) => {
	return (
		<div className='flex flex-wrap justify-center mt-10 gap-6'>
			{booksData &&
				booksData.map(book => {
					return (
						<BooksItem
							key={book.id}
							img={book.img}
							title={book.title}
							author={book.author}
							createdAt={book.createdAt}
							rate={book.rate}
						/>
					)
				})}
		</div>
	)
}

export default Books
