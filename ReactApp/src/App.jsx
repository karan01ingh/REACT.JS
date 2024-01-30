import { useState } from 'react'

function App() {
  const addvalue=()=>{
    setCounter(counter+1);
  }
  const minusvalue=()=>{
    setCounter(counter-1);
  }
  let [counter, setCounter] = useState(15);
  return (
    <div>
      <h1>REACT WITH VITE</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addvalue} >Add value:{counter}</button>
      <br />
      <button onClick={minusvalue}>Decrease value:{counter}</button>
    </div>
  )
}

export default App
