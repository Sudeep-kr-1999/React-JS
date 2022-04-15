import "./App.css";
import React, { useReducer } from "react";
import React from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";
import ComponentE from "./components/ComponentE";
import CounterReducer from "./components/CounterReducer";
import CounterReducerComplex from "./components/CounterReducerComplex";
import CounterMultipleuseReducer from "./components/CounterMultipleuseReducer";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    // <CountContext.Provider
    //   value={{ countState: count, countDispatch: dispatch }}
    // >
      <div className="App">
        <DataFetchingTwo />
        <DataFetchingOne/>
        Count -{count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    // </CountContext.Provider>
    // <div>
    //   <CounterMultipleuseReducer />
    //   <CounterReducer />
    //   <CounterReducerComplex />
    // </div>
    //  <UserContext.Provider value={'sudeep'}>
    //       <ChannelContext.Provider value={'Learn React'}>
    //         <ComponentE/>
    //       </ChannelContext.Provider>
    //     </UserContext.Provider>
  );
}

export default App;
