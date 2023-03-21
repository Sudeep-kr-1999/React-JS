import React, { useRef } from "react";
import { UseImperativeHandlerChild } from "./UseImperativeHandlerChild";

export const UseImperativeHandlerParent = () => {
  const reference = useRef();

  const handler = () => {
    reference.current.focus();
    reference.current.changePassword();
  };
  return (
    <>
      <UseImperativeHandlerChild ref={reference} />
      <button onClick={handler}>Take Access</button>
    </>
  );
};
