import React from "react";
import "./App.css";
import ClassTimer from './components/ClassTimer';
import HookTimer from "./components/HookTimer";
import FocusInput from './components/FocusInput';
import ParentComponent from './components/ParentComponent';
import UseMemoCounter from './components/UseMemoCounter';

function App() {
  return (
    <div className="App">
      {/* <HookTimer/> */}
      {/* <ClassTimer /> */}
      {/* <FocusInput/> */}
      {/* <UseMemoCounter/> */}
      <ParentComponent/>
    </div>
  );
}

export default App;
