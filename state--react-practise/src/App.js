import React,{useState} from "react";

function App() {
  const [name,setName] = useState('mario');
  const [age,setAge] = useState(25);

  const handclick = ()=>{
    setName('luigi');
    setAge(30);
  }
  return (
    <div className="App">
      <h2>HomePage</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handclick}>Click me</button>
      </div>
     
         
  );
}

export default App;
