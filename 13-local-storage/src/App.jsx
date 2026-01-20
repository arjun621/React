import React from 'react'

const App = () => {

  localStorage.setItem("user","Arjun");
  localStorage.setItem("age","21");
  const name = localStorage.getItem("user");
  const age = localStorage.getItem("age");

  localStorage.removeItem("age"); // removes only 1 element
  // localStorage.clear() clear full localStorage

  console.log(name,age);

  /////// storing object in localstorage //////////

  const user1 = {
    name: "Sam",
    age: 30,
    country: "US"
  };

  localStorage.setItem("user1",JSON.stringify(user1)); // to store object we have to convert in string by JSON.stringify
  const data = JSON.parse(localStorage.getItem("user1"));// again convert it to object by JSON.parse
  console.log(data);

  return (
    <div>App</div>
  )
}

export default App