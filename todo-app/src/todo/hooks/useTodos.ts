import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"


export const useTodos = () => {
  const {todoState, toggleTodo} = useContext(TodoContext);
  const { todos } = todoState;

  return {
    toggleTodo,
    todos,
    pendingTodos: todos.filter( (todo) => !todo.completed ).length
  }
}