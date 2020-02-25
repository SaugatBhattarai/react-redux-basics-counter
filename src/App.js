import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector(state => state.myCounter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Hello Saugat {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>++</button>
      <button onClick={() => dispatch(decrement(2))}>--</button>
      {isLogged ? (
        <h2>This is valuable information can't be shown publicly</h2>
      ) : (
        <h2>This information is not logged info.</h2>
      )}
    </div>
  );
}

export default App;
