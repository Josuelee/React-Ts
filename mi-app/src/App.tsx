import CounterReducer from "./Components/CounterReducer";
import Counter from "./Components/Counter";
import TimerParent from "./Components/TimerParent";
import User from "./Components/User";
import Form from "./Components/Form";
import Form2 from "./Components/Form2";

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />
      <h2>Use State</h2>
      <Counter />
      <User />
      <hr />
      <h2>useEffect - useRef</h2>
      <TimerParent />
      <hr />
      <h2>useReducer</h2>
      <CounterReducer />
      <hr />
      <h2>customHooks</h2>
      <Form />
      <br />
      <Form2 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
