import { createContext } from 'react'
import BooksService from '../services/books'
import { useState, useEffect } from 'react'

const Context = createContext()
export const ContextProvider = ({ children }) => {
	// GetAllBooks
	const [isLoading, setIsLoading] = useState(false)
	const [booksData, setBooksData] = useState([])
	const getBooks = async () => {
		try {
			setIsLoading(true)
			const response = await BooksService.getBooks()
			setBooksData(response)
		} catch (error) {
			alert(error.message)
		} finally {
			setIsLoading(false)
		}
	}
	useEffect(() => {
		getBooks()
	}, [])

	// GetOnceBook
	const [bookInfo, setBookInfo] = useState(null)
	const [isLoadingInfo, setIsLoadingInfo] = useState(false)

	const getBook = async id => {
		try {
			setIsLoadingInfo(true)
			const response = await BooksService.getBook(id)
			setBookInfo(response)
		} catch (error) {
			alert(error.message)
		} finally {
			setIsLoadingInfo(false)
		}
	}

	// Books Search
	const [searchBook, setSearchBook] = useState('')
	const searchBookFunc = (data, str) => {
		return data.filter(item =>
			item.title.toLowerCase().includes(str.toLowerCase())
		)
		return data
	}
	let searchBookData = searchBookFunc(booksData, searchBook)

	// Click heart books type
	const setLikeToTrue = id => {
		if (!booksData) {
			return []
		}
		const updatedBooksLike = booksData.map(item => {
			if (item.id === id) {
				return { ...item, like: !item.like }
			}
			return item
		})
		setBooksData(updatedBooksLike)
	}

	return (
		<Context.Provider
			value={{
				booksData,
				searchBookData,
				setLikeToTrue,
				getBook,
				bookInfo,
				searchBook,
				setSearchBook,
				isLoading,
				isLoadingInfo,
			}}
		>
			{children}
		</Context.Provider>
	)
}

export default Context
