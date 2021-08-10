import { useState } from "react"
import "./App.css";

const App = () => {
  const [ count, setCount ] = useState(0)
  const handleClick = () => setCount(count + 1)

  return (
    <div className="App">
      <p>The current count is { count }</p>
      <button onClick={ handleClick }>Increment Count</button>
    </div>
  )
}

export default App;
