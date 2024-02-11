import axios from './api'

const BooksService = {
	async getBooks() {
		const response = await axios.get('/books')
		return response.data
	},
	async getBook(id) {
		const response = await axios.get(`/books/${id}`)
		return response.data
	},
	async getBookLike(id) {
		const response = await axios.get(`/books/like/${id}`)
		return response.data
	},
	async createBook(bookData) {
		const response = await axios.post('/books', bookData)
		return response.data
	},
	async deleteBook(id) {
		const response = await axios.delete(`/books/${id}`)
		return response.data
	},
	async editBook(id, bookData) {
		const response = await axios.put(`/books/${id}`, bookData)
		return response.data
	},
}

export default BooksService
