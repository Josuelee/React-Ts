import { useReducer } from "react";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducer";
import { TodoState } from "../interfaces/interfaces";

const INITIAL_STATE: TodoState = {
  todoCount: 0,
  todos: [
    {
      id: 1,
      description: "Recolectar las piedras del infinito",
      completed: false,
    },
    {
      id: 2,
      description: "Piedra del alma",
      completed: false,
    },
  ],
  completed: 0,
  pending: 0,
};

type props = {
  children: JSX.Element | JSX.Element[];
};

export const TodoProvider = ({ children }: props) => {

  const [ todoState , dispatch] = useReducer( todoReducer , INITIAL_STATE );

  
  const toggleTodo = ( id: number ): void => {
    dispatch({type: "toggleTodo", payload: { id }});
  }

  return (
    <TodoContext.Provider value={{
      todoState,
      toggleTodo
    }}>
      {children}
    </TodoContext.Provider>
  );
};


