import axios from './api'

const BooksService = {
	async getBooks() {
		const response = await axios.get('/books')
		console.log(response)
	},
}

export default BooksService
