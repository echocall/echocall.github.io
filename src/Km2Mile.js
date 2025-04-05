import { useState } from 'react'
import Buttons from './Buttons'

function Km2Mile() {
  const [amount, setAmount] = useState(0)
  const onChange = (e) => setAmount(e.target.value)

  const[flipped, setFlipped] = useState(false)
  const onFlip = () => {
    onReset()
    setFlipped((flipped) => !flipped)
  }

  const onReset = () => setAmount(0)

  return (
      <div>
        <h3>Kilometers to Miles</h3>
          <label htmlFor="kilometers">Kilometers:</label>
          <input 
              required
              type="number"
              id="kilometers"
              value={flipped ? (Math.round((amount * .6214)*1000)/1000): amount}
              onChange={onChange}
              disabled={flipped === true}
            />
            <h4>You want to convert from 0 kilometers to:</h4>
            <label htmlFor="hours">Miles:</label>
            <input 
            type="number"
            id="miles"
            value={flipped ? amount: (Math.round((amount / .6214)*10000)/10000)}
            onChange={onChange}
            disabled={flipped === false}
            />
          <Buttons onReset={onReset} onFlip={onFlip} />
      </div>
  )
}

export default Km2Mile
