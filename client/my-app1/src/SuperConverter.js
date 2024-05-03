import React from 'react';
import Min2Hour from './Min2Hour';
import Km2Mile from './Km2Mile';

function SuperConverter() {
    const [index, setIndex] = React.useState("0");
  return (
    <div>
      <h1 className="hi">Super Converter</h1>
      <select value={index} onChange={(event) => setIndex(event.target.value)}>
        <option value="0">Minutes & Hours</option>
        <option value="1">Kilometers & Miles</option>  
      </select>
      {index === "0" ? <Min2Hour /> : null} 
      {index === "1" ? <Km2Mile /> : null}
    </div>
  );
}
export default SuperConverter;