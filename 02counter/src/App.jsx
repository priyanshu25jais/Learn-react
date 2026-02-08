import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  // let counter = 5
  // const addValue = () => {
  //     counter=counter+1;
  //     setCounter(counter)
  //  }

  //  const removeValue = () => {
  //   setCounter(counter-1);
  //  }
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  
  return (
    <>
      <h1>Chai aurReact</h1>
      <h3>Counter Value : {counter}</h3>
      <button onClick={addValue}>Add Value: {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove Value: {counter}</button>
    </>
  )
}

export default App
