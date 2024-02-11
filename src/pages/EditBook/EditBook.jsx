import { ArrowLeftOutlined } from '@ant-design/icons'
import { Link, useParams } from 'react-router-dom'
import { styles } from '../../utils/styles'
import { useForma } from '../../costumHooks/useForma'
import { useContext, useEffect } from 'react'
import Context from '../../context/Context'
import { Alert, Space } from 'antd'

const EditBook = () => {
	const { booksData, editBook, responseEditBook, errorEditBook } =
		useContext(Context)

	const { bookId } = useParams()

	const editBookData = booksData.filter(item => item.id === bookId && item)

	const [value, handleChange] = useForma({
		title: editBookData && editBookData[0].title,
		description: editBookData && editBookData[0].description,
		author: editBookData && editBookData[0].author,
		aboutAuthor: editBookData && editBookData[0].aboutAuthor,
		img: editBookData && editBookData[0].img,
	})

	const ScrollToTop = () => {
		useEffect(() => {
			window.scrollTo(0, 0)
		}, [])

		return null
	}

	const handleSubmit = async e => {
		e.preventDefault()
		const bookData = {
			title: value.title,
			description: value.description,
			author: value.author,
			aboutAuthor: value.aboutAuthor,
			createdAt: editBookData[0].createdAt,
			rate: editBookData[0].rate,
			img: value.img,
			like: editBookData[0].like,
			editionNumber: editBookData[0].editionNumber,
			curentlyReading: editBookData[0].curentlyReading,
			haveRead: editBookData[0].haveRead,
		}
		await editBook(bookId, bookData)
	}

	return (
		<div className='p-10 w-full min-h-screen bg-primary'>
			{responseEditBook && (
				<Space
					direction='vertical'
					style={{ width: '40%' }}
					className='pr-5 absolute right-0'
					data-aos='fade-down-left'
				>
					<Alert
						message='Success Tips, back home'
						type='success'
						showIcon
						closable
					/>
				</Space>
			)}

			{errorEditBook && (
				<Space
					direction='vertical'
					style={{ width: '40%' }}
					className='pr-5 absolute right-0 bottom-32'
					data-aos='fade-down-left'
				>
					<Alert
						message={errorEditBook.response.data}
						type='error'
						showIcon
						closable
					/>
				</Space>
			)}
			<Link
				to='/'
				className='max-w-[150px] flex items-center gap-[9px] cursor-pointer'
			>
				<ScrollToTop />
				<ArrowLeftOutlined className='text-white' />
				<p className='text-white text-[15px] font-normal leading-[128.523%]'>
					Back to results
				</p>
			</Link>

			<form onSubmit={handleSubmit}>
				<div className='mt-10 flex max-sm:flex-col gap-10'>
					<div className='flex flex-col gap-10 w-full'>
						<input
							type='text'
							placeholder='Title'
							className={`${styles.input}`}
							required
							name='title'
							value={value.title || ''}
							onChange={handleChange}
						/>

						<textarea
							type='text'
							id=''
							cols='30'
							rows='10'
							placeholder='Description'
							className={`${styles.input} h-80`}
							required
							name='description'
							value={value.description || ''}
							onChange={handleChange}
						></textarea>
					</div>
					<div className='flex flex-col gap-10 w-full'>
						<input
							type='text'
							placeholder='URL img'
							required
							className={`${styles.input}`}
							name='img'
							value={value.img || ''}
							onChange={handleChange}
						/>
						<input
							type='text'
							placeholder='Author'
							className={`${styles.input}`}
							required
							name='author'
							value={value.author || ''}
							onChange={handleChange}
						/>
						<textarea
							type='text'
							id=''
							cols='30'
							rows='10'
							placeholder='About author'
							required
							className={`${styles.input} h-32`}
							name='aboutAuthor'
							value={value.aboutAuthor || ''}
							onChange={handleChange}
						></textarea>
					</div>
				</div>
				<button
					type='submit'
					className='bg-primaryRed px-5 py-[14px] rounded-[6px] text-base text-white font-semibold leading-5 mt-10'
				>
					Edit book
				</button>
			</form>
		</div>
	)
}

export default EditBook
