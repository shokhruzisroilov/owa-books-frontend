import { styles } from '../../../utils/styles'
import { shapesImage } from '../../../assets'
import { Link } from 'react-router-dom'
import { useForma } from '../../../costumHooks/useForma'
import axios from 'axios'

const Register = () => {
	const [value, hadlerChange] = useForma({
		username: 'shohruz',
		email: 'shohruzisroilov@gmail.com',
		password: 'shohruz',
	})

	const onSubmit = async e => {
		e.preventDefault()
		try {
			const response = await axios.post('https://reqres.in/api/register', {
				// username: 'shohrufdafsdz',
				email: 'eve.holt@reqres.in',
				password: 'pistol',
			})
			console.log(response.data) // Success message from server
		} catch (error) {
			console.error('Error:', error)
		}
	}
	return (
		<div className={`w-full min-h-screen bg-primary ${styles.blockCenter}`}>
			<div
				className={`w-1170 min-h-550 max-sm:min-h-screen bg-primaryBlack ${styles.blockBetween}`}
			>
				<form
					className='w-1/2 max-sm:w-full px-90  max-md:px-5'
					onSubmit={onSubmit}
				>
					<h3 className='text-white text-[32px] font-bold leading-normal mt-5'>
						Sign Up
					</h3>
					<div className='mt-5'>
						<label className={`${styles.label}`}>Username</label> <br />
						<input
							type='text'
							className={`${styles.input} mt-2`}
							name='username'
							value={value.username}
							onChange={hadlerChange}
						/>
					</div>
					<div className='mt-5'>
						<label className={`${styles.label}`}>Email Address</label> <br />
						<input
							type='email'
							className={`${styles.input} mt-2`}
							name='email'
							value={value.email}
							onChange={hadlerChange}
						/>
					</div>
					<div className='mt-5'>
						<label className={`${styles.label}`}>Your Password</label> <br />
						<input
							type='password'
							className={`${styles.input} mt-2`}
							name='password'
							value={value.password}
							onChange={hadlerChange}
						/>
					</div>
					<button className={`${styles.buttonAuth}`} type='submit'>
						Sign Up
					</button>
					<span className={`${styles.blockBetween} py-5`}>
						<p className={`${styles.paragraphAuth} cursor-pointer`}>
							Forget Password?
						</p>{' '}
						<p className={`${styles.paragraphAuth}`}>
							Don't have an account?{' '}
							<Link to='/login' className='text-primaryRed'>
								Sign In
							</Link>
						</p>
					</span>
				</form>
				<div className='w-1/2 h- max-sm:hidden'>
					<img src={shapesImage} alt='shapes image auth' />
				</div>
			</div>
		</div>
	)
}

export default Register
