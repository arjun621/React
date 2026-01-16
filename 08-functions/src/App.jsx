import React from 'react'

const App = () => {

  function btnclicked() {
    console.log("Button is clicked");
  }

  return (
    <div>
      <button onClick={btnclicked}>Click me</button>
      <input onChange={(elem) =>{
        console.log(elem.target.value);
      }} type="text" placeholder='Enter here'/>
    </div>
  )
}

export default App


// hooks - 4:56:25