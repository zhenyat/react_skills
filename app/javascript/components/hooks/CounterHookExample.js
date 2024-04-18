/*****
 * https://ru.legacy.reactjs.org/docs/hooks-state.html
 *****/
import React, { useState } from 'react';

export default function HookExample() {
  const [count, setCount] = useState(0);

  return (  
    <React.Fragment>
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </React.Fragment>
  )
}
