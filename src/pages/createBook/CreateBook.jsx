import { ArrowLeftOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { styles } from '../../utils/styles'
import { useForma } from '../../costumHooks/useForma'
import { useContext } from 'react'
import Context from '../../context/Context'
import { Alert, Space } from 'antd'

const CreateBook = () => {
	const { createBookFunc, errorCreateBook, responseCreateBook } =
		useContext(Context)
	const [value, handleChange] = useForma({
		title: '',
		description: '',
		author: '',
		aboutAuthor: '',
		img: '',
	})
	const rate = Math.floor(Math.random() * 5)
	const editionNumber = 'First Edition'
	const currentlyReading = 1
	const haveRead = 1

	const handleSubmit = e => {
		e.preventDefault()
		const bookData = {
			title: value.title,
			description: value.description,
			author: value.author,
			aboutAuthor: value.aboutAuthor,
			rate: rate,
			like: false,
			img: value.img,
			editionNumber: editionNumber,
			currentlyReading: currentlyReading,
			haveRead: haveRead,
		}
		createBookFunc(bookData)
	}

	// sound-effect
	let audio = new Audio('/mouse-sound.wav')
	const start = () => {
		audio.play()
	}

	return (
		<div className='p-10 w-full min-h-screen bg-primary'>
			{responseCreateBook && (
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

			{errorCreateBook && (
				<Space
					direction='vertical'
					style={{ width: '40%' }}
					className='pr-5 absolute right-0 bottom-48'
					data-aos='fade-down-left'
				>
					<Alert
						message={errorCreateBook.response.data}
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
							value={value.title}
							onChange={handleChange}
						/>

						<textarea
							type='text'
							id=''
							cols='30'
							rows='10'
							placeholder='Description'
							className={`${styles.input} h-48`}
							required
							name='description'
							value={value.description}
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
							value={value.img}
							onChange={handleChange}
						/>
						<input
							type='text'
							placeholder='Author'
							className={`${styles.input}`}
							required
							name='author'
							value={value.author}
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
							value={value.aboutAuthor}
							onChange={handleChange}
						></textarea>
					</div>
				</div>
				<button
					type='submit'
					className='bg-primaryRed px-5 py-[14px] rounded-[6px] text-base text-white font-semibold leading-5 mt-10'
					onClick={start}
				>
					Create book
				</button>
			</form>
		</div>
	)
}

export default CreateBook
