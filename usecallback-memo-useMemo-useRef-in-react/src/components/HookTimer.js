import React, { useState, useEffect, useRef } from "react";

function HookTimer() {
  const intervalRef = useRef();
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    // without using useRef
    // const interval=setInterval(()=>{setTimer((prevtimer)=>prevtimer+1)},1000)

    // with useRef hook
    intervalRef.current = setInterval(() => {
      setTimer((prevtimer) => prevtimer + 1);
    }, 1000);

    // without userRef hook
    // return ()=> {clearInterval(interval);}

    // with useRef hook

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      Hook Timer- {timer}
      {/* here interval is not defined since it is inside the Effect hook */}
      <button
        onClick={() => {
          clearInterval(intervalRef.current);
        }}
      >
        Clear Hook Timer
      </button>
    </div>
  );
}

export default HookTimer;
