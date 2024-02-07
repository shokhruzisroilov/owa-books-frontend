import { styles } from '../../utils/styles'

const ErrorTextUi = ({ children }) => {
	return (
		<h3
			className={` ${styles.blockCenter} h-[80vh] text-white text-[28px] max-sm:text-xl font-semibold leading-[30px]`}
		>
			{children}
		</h3>
	)
}

export default ErrorTextUi
