import React, { use, useState } from 'react'


const App = () => {

  const [num, setNum] = useState(0);

  const increaseNum = () => {
    console.log("increasing");
    setNum(num+1);
  }

  const decreaseNum = () => {
    console.log("decreasing");
    setNum(num-1);
  }

  const [n, setN] = useState([10,20,30]);

  const btnClicked = () => {
    const newN = [...n];
    newN.push(40);

    setN(newN);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      
      <h1>{n}</h1>
      <button onClick={btnClicked}>Click</button>

    </div>
  )
}

export default App