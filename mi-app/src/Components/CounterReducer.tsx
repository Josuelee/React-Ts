import { useReducer } from "react";

interface State {
  count: number;
}

const initialState: State = {
  count: 0,
};

type counterAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "custom"; payload: number };

const counterReducer = (state: State, action: counterAction): State => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };

    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };

    case "custom":
      return {
        ...state,
        count: action.payload,
      };

    default:
      return state;
  }
};

const CounterReducer = () => {
  const [{ count }, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <h3>count: {count}</h3>
      <button
        className="btn btn-outline-primary "
        onClick={() => dispatch({ type: "increment" })}
      >
        +1
      </button>
      <button
        className="btn btn-outline-primary "
        onClick={() => dispatch({ type: "decrement" })}
      >
        -1
      </button>
      <button
        className="btn btn-outline-danger "
        onClick={() => dispatch({ type: "custom", payload: 100 })}
      >
        100
      </button>
      <button
        className="btn btn-outline-danger "
        onClick={() => dispatch({ type: "custom", payload: 0 })}
      >
        0
      </button>
    </>
  );
};
export default CounterReducer;
