import React, { useState } from 'react'

function useCounter(initialvalue = 0, step = 1) {
    const [count, setCount] = useState(initialvalue);

    const increment = () => setCount(prev => prev + step);
    const decrement = () => setCount(prev => prev - step);
    const reset = () => setCount(initialvalue);

    return { count, increment, decrement, reset };
}

export default useCounter;