import axios from './api'

const BooksService = {
	async getBooks() {
		const response = await axios.get('/books')
		return response.data
	},
}

export default BooksService
