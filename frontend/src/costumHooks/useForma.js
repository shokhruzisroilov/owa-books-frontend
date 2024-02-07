import { useState } from 'react'

export const useForma = initialState => {
	const [value, setValue] = useState(initialState)

	const handleChange = e => {
		setValue({ ...value, [e.target.name]: e.target.value })
	}

	const resetForm = () => {
		setValue(initialState)
	}

	return [value, handleChange, resetForm]
}
