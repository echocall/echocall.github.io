function Miles({flipped, onChange, amount}) {
    return ( 
        <div>
            <label htmlFor="miles">Miles</label>
            <input
                value={flipped ? amount : amount/1.609344}
                id="miles"
                placeholder="Miles"
                type="number"
                onChange={onChange}
                disabled={flipped === false} 
            />
        </div>
    )
}
export default Miles;