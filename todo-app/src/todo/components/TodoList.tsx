import { useTodos } from "../hooks/useTodos";
import TodoItem from "./TodoItem";


const TodoList = () => {

  const { todos } = useTodos();

  return (
    <ul>
      {
        todos.map( (todo) => <TodoItem todo={ todo } key={ todo.id }/> )
      }
    </ul>
  )
}
export default TodoList