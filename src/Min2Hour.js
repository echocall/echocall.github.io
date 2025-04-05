import { useState } from 'react'
import Buttons from './Buttons'

function Min2Hour() {
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
        <h3>Super Converter</h3>
          <label htmlFor="minutes">Minutes:</label>
          <input 
              required
              type="number"
              id="minutes"
              value={flipped ? amount * 60: amount}
              onChange={onChange}
              disabled={flipped === true}
            />
            <h4>You want to convert from 0 minutes to:</h4>
            <label htmlFor="hours">Hours:</label>
            <input 
            type="number"
            id="hours"
            value={flipped ? amount: Math.round(amount / 60)}
            onChange={onChange}
            disabled={flipped === false}
            />
          <Buttons onReset={onReset} onFlip={onFlip} />
      </div>
  )
}

export default Min2Hour
