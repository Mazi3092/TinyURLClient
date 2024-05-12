// GlobalVariableExample.js

import React, { useRef, useEffect } from 'react';

const GlobalVariableExample = ({ newGlobalValue }) => {
  const globalVariable = useRef('Hello, I am a global variable!');

  // Update the global variable when newGlobalValue changes
  useEffect(() => {
    if (newGlobalValue) {
      globalVariable.current = newGlobalValue;
    }
  }, [newGlobalValue]);

  return (
    <div>
      <h1>{globalVariable.current}</h1>
    </div>
  );
};

export default GlobalVariableExample;
