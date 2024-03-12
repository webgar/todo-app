import { useState } from 'react'
import styles from './TodoForm.module.css'
function TodoForm(props) {
	const { addTodo } = props
	const [data, setData] = useState('')

	const onSubmitHandler = event => {
		event.preventDefault()
		if (!data.trim()) {
			return
		}
		addTodo(data)
		setData('')
	}
	const handleChange = e => {
		setData(e.target.value)
	}
	return (
		<>
			<form onSubmit={onSubmitHandler}>
				<input
					className={styles.todoInput}
					type='text'
					value={data}
					onChange={handleChange}
					placeholder='Enter new todo'
				/>
				<button className={styles.formButton} type='submit'>
					Submit
				</button>
			</form>
		</>
	)
}

export default TodoForm
