import { useState } from 'react'
import Min2Hour from './Min2Hour' 
import Km2Mile from './Km2Mile'

function App() {
  const [index, setIndex] = useState("0")

  return (
    <div className="flex-container">
      <h2>Super Converter</h2>
      <select value={index}
      onChange = {(event) => setIndex(event.target.value)}>
        <option value="0">Minutes & Hours</option>
        <option value="1">Kilometers & Miles</option>
      </select>

      {index === "0" ? <Min2Hour /> : null}
      {index === "1" ? <Km2Mile /> : null}
      
    </div>
  )
}

export default App
