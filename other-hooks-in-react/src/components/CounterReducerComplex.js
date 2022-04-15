import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

// here action refer to the entire object in the dispatch method
const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter + action.value,
      };
    case "decrement":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter - action.value,
      };
    case "increment 2":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter + action.value,
      };
    case "decrement 2":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter - action.value,
      };

    case "reset":
      return initialState;
    default:
      return currentState;
  }
};
function CounterReducerComplex() {
  // dispatch method allow us to execute the code corresponding to a particular action in a reducer function action
  // count refer to the entire state of the object
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>countFirstConter-{count.firstCounter}</div>
      <div>CountSecondCounter-{count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement 1
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "increment 2", value: 1 })}>
        Increment Second Counter
      </button>
      <button onClick={() => dispatch({ type: "decrement 2", value: 1 })}>
        Decrement Second Counter
      </button>
    </div>
  );
}

export default CounterReducerComplex;

// Note:----- this is useReducer with simple state and simple action
