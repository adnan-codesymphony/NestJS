import React, { useEffect, useRef, useState } from "react";

function CountExample() {
  const [count, setCount] = useState(0);
  const a = useRef(0);

  useEffect(() => {
    a.current = a.current + 1;
    console.log(`rerendering and the value of a is ${a.current}`);
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count is {count}</button>
    </div>
  );
}

export default CountExample;
