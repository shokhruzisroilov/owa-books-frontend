import BooksItem from './booksItem/BooksItem'

const Books = ({ searchBookData }) => {
	return (
		<div className='flex flex-wrap justify-center mt-10 gap-6'>
			{searchBookData &&
				searchBookData.map(book => {
					return (
						<BooksItem
							key={book.id}
							id={book.id}
							img={book.img}
							title={book.title}
							author={book.author}
							createdAt={book.createdAt}
							rate={book.rate}
							like={book.like}
						/>
					)
				})}
		</div>
	)
}

export default Books
