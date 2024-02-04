const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())

const home = require('./routes/home')
const books = require('./routes/books')

app.use('/', home)
app.use('/api/books', books)
app.use(cors({ origin: '*' }))

const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log(`${port}-portni eshitishni boshladim...`)
})
