import React, { forwardRef, useRef ,useImperativeHandle } from "react";

export const UseImperativeHandlerChild = forwardRef((props, ref) => {
  const inputRef = useRef();

//   useImperativeHandler: jab hume kisi bhi reference ka limited access dena hota hai to hum is function ka use krte hai 
  useImperativeHandle(
    ref,
    () => {
      return {
        focus: () => inputRef.current.focus(),
        changePassword: () => (inputRef.current.type = "password"),
      };
    },
    []
  );
  return <input type="text" ref={inputRef} />;
});
