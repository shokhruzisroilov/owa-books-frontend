import { createContext } from 'react'
import BooksService from '../services/books'
import { useState, useEffect } from 'react'

const Context = createContext()
export const ContextProvider = ({ children }) => {
	const [searchBook, setSearchBook] = useState('')

	const [booksData, setBooksData] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	const [bookInfo, setBookInfo] = useState(null)
	const [isLoadingInfo, setIsLoadingInfo] = useState(false)
	const [errorBookInfo, setErrorBookInfo] = useState(null)

	const [errorBookLike, setErrorBookLike] = useState(null)
	const [errorCreateBook, setErrorCreateBook] = useState(null)


	// GetAllBooks
	const getBooks = async () => {
		try {
			setIsLoading(true)
			const response = await BooksService.getBooks()
			setBooksData(response)
		} catch (error) {
			setError(error)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		getBooks()
	}, [])

	// GetOnceBook
	const getBook = async id => {
		try {
			setIsLoadingInfo(true)
			const response = await BooksService.getBook(id)
			setBookInfo(response)
		} catch (error) {
			setErrorBookInfo(error)
		} finally {
			setIsLoadingInfo(false)
		}
	}

	// Get books like update
	const getBookLike = async id => {
		try {
			const response = await BooksService.getBookLike(id)
			setBooksData(response)
		} catch (error) {
			setErrorBookLike(error)
		}
	}

	useEffect(() => {
		getBookLike(1)
	}, [])

	// Create books response
	const createBookFunc = async bookData => {
		try {
			const response = await BooksService.createBook(bookData)
			setBooksData([...booksData, response])
			getBooks()
		} catch (error) {
			setErrorCreateBook(error)
		}
	}

	// Books Search
	const searchBookFunc = (data, str) => {
		return data.filter(
			item =>
				item.title.toLowerCase().includes(str.toLowerCase()) ||
				item.author.toLowerCase().includes(str.toLowerCase())
		)
	}
	let searchBookData = searchBookFunc(booksData, searchBook)

	return (
		<Context.Provider
			value={{
				booksData,
				getBook,
				bookInfo,
				getBookLike,
				searchBookData,
				searchBook,
				setSearchBook,
				isLoading,
				isLoadingInfo,
				error,
				errorBookInfo,
				errorBookLike,
				createBookFunc,
				errorCreateBook,
			}}
		>
			{children}
		</Context.Provider>
	)
}

export default Context
