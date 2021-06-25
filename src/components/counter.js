import React, { useState } from 'react';

const Counter = () => {
  const [clicks, setClicks] = useState(0);
  const increment = () => setClicks(clicks + 1);
  const decrement = () => setClicks(clicks - 1);
  return (
    <div>
      <button onClick={increment}>
        Incrementar
      </button>
      <button onClick={decrement}>
        Disminuir
      </button>
      <h1>{clicks}</h1>
    </div>
  )
}

export default Counter;