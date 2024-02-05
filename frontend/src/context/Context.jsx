import { createContext } from 'react'
import BooksService from '../services/books'
import { useState, useEffect } from 'react'

const Context = createContext()
export const ContextProvider = ({ children }) => {
	// GetAllBooks
	const [booksData, setBooksData] = useState([])
	const getBooks = async () => {
		try {
			const response = await BooksService.getBooks()
			setBooksData(response)
		} catch (error) {
			console.error(error)
		}
	}

	// GetOnceBook
	const [bookInfo, setBookInfo] = useState(null)
	const getBook = async id => {
		try {
			const response = await BooksService.getBook(id)
			setBookInfo(response)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		getBooks()
		getBook()
	}, [])

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
		<Context.Provider value={{ booksData, setLikeToTrue, getBook, bookInfo }}>
			{children}
		</Context.Provider>
	)
}

export default Context
