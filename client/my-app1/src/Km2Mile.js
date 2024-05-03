import React from 'react';
import Buttons from './Buttons';
import Kilometers from './Kilometers';
import Miles from './Miles';

function Km2Mile() {
    const [amount, setAmount] = React.useState(0);
    const [flipped, setFlipped] = React.useState(false);
    const onChange = (event) => setAmount(event.target.value);
    const onReset = () => setAmount(0);
    const onFlip = () => {
        onReset();
        setFlipped((flipped) => !flipped);
    }
    return (
        <div>
            <h3>Kilometers to Miles</h3>
            <Miles flipped={flipped} onChange={onChange} amount={amount} />
            <h4>You want to convert from {amount} miles to: </h4>
            <Kilometers flipped={flipped} onChange={onChange} amount={amount} />
            <Buttons onReset={onReset} onFlip={onFlip} />
        </div>
    )
}
export default Km2Mile;