import React from 'react'

const ChildCounter = ({ text, onCounterIncrement }) => (
    <button onClick={onCounterIncrement}>{text}</button>
)


export default ChildCounter