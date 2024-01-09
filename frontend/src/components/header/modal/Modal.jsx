import Navbar from '../navbar/Navbar'
import { styles } from '../../../utils/styles'

const Modal = () => {
	return (
		<div
			className={`${styles.blockCenter} z-10 w-full h-100 bg-primary absolute top-100 sideBar`}
		>
			<Navbar />
		</div>
	)
}

export default Modal
