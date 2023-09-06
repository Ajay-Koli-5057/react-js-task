import React, { useState } from 'react'
import ChildCounter from './ChildCounter'
import './counter.css'

const Counter = () => {
    const [counts, setCounts] = useState(0)

    const onCounterIncrement = () => {
        setCounts(prevState => prevState + 1)
    }
    return (
        <div className="counter-container">
            <div className="counter-box">
                <p>Count: {counts}</p>
                <div className="counter-buttons-container">
                    <button className="increment-btn" onClick={onCounterIncrement}>Increment</button>
                    <button className="reset" onClick={() => setCounts(0)}>Reset</button>
                    <ChildCounter text="Child" onCounterIncrement={onCounterIncrement} />
                </div>
            </div>
        </div>
    )
}

export default Counter;