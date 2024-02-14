import { styles } from '../../../utils/styles'
import { shapesImage } from '../../../assets'
import { Link } from 'react-router-dom'
import { useForma } from '../../../costumHooks/useForma'

const Login = () => {
	const [value, hadlerChange] = useForma({
		email: 'shohruzisroilov@gmail.com',
		password: 'shohruz',
	})

	const onSubmit = async e => {
		e.preventDefault()
	}

	// sound-effect
	let audio = new Audio('/click-sound.wav')
	const start = () => {
		audio.play()
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
						Sign In
					</h3>
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
					<button className={`${styles.buttonAuth}`} onClick={start}>
						Sign In
					</button>
					<span className={`${styles.blockBetween} py-5`}>
						<p className={`${styles.paragraphAuth} cursor-pointer`}>
							Forget Password?
						</p>{' '}
						<p className={`${styles.paragraphAuth}`}>
							Don't have an account?{' '}
							<Link to='/register' className='text-primaryRed'>
								Sign Up
							</Link>
						</p>
					</span>
				</form>
				<div className='w-1/2 h- max-sm:hidden'>
					<img src={shapesImage} alt='shapes auth' />
				</div>
			</div>
		</div>
	)
}

export default Login
