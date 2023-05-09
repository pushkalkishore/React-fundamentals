import { useRef } from "react";
import "./App.css";
import React, { useState } from "react";

//for loop in react

// function App() {
//   const user = [
//     { name: "John", age: 22 },
//     { name: "Peter", age: 23 },
//     { name: "Mark", age: 24 },
//   ];

//   return (
//     <div className="App">
//       <h1>My React App</h1>
//       {user.map((item, index) => (
//         <Users data={item} />
//       ))}
//     </div>
//   );
// }

function App() {
  const inputRef = useRef(null);
  const [data, setData] = useState(null);
  function handleClick() {
    console.log(inputRef.current.value);
    setData(inputRef.current.value);
  }
  return (
    <div className="App">
      <input ref={inputRef} type="text" id="message" name="message" />
      <button onClick={handleClick}>Submit</button>
      <h1>{data}</h1>
    </div>
  );
}

export default App;
