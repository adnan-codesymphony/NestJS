import React, { useEffect, useRef } from "react";

function DOMManipulation() {
  const inputElement = useRef();
  const btnRef = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  useEffect(()=>{
    btnRef.current.style.backgroundColor = "red"
  },[])

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput} ref={btnRef}>Focus Input</button>
    </div>
  );
}

export default DOMManipulation;
