import { useState } from 'react'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

function App() {
	const [todos, setTodos] = useState([])
	const addHandlerTodo = text => {
		setTodos([...todos, text])
	}
	const deleteTodoHandler = index => {
		setTodos(todos.filter((_, idx) => idx !== index))
	}
	return (
		<div className='App'>
			<h1>Todo App</h1>
			<TodoForm addTodo={addHandlerTodo} />
			<TodoList deleteTodo={deleteTodoHandler} todos={todos} />
		</div>
	)
}

export default App
