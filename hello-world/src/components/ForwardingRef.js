import React from "react";

// function ForwardingRef() {
//     return (
//         <div>
//             <input type="text"/>
//         </div>
//     )
// }

// this means ForwardingRef ek component hai jo ki apne parent se ek ref and props lekr aata hai , jis ref ko hum child mein div ko assign kr skte hai aur uske baad agr hum chahe to parent se child ko handle kr paayege
// we can pass ref to any element in the child component 
const ForwardingRef = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});
export default ForwardingRef;

// Ref forwarding is a technique to automatically pass a ref through a component to one of its children
