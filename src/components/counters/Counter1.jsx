import React from 'react'
import useCounter from '../../custom/useCounter'

const Counter1 = () => {
  const { count, increment, decrement, reset } = useCounter(0, 1);

  return (
    <div className='text-center space-y-2'>
      <h2 className='text-2xl'>Counter1</h2>
      <p>Count: {count}</p>
      <button onClick={increment} className="text-[12px] text-red-600 hover:bg-red-600 hover:text-white border-2 font-bold border-red-600 rounded-sm cursor-pointer px-2 py-1 uppercase mr-4">increment +1</button>
      <button onClick={decrement} className="text-[12px] text-red-600 hover:bg-red-600 hover:text-white border-2 font-bold border-red-600 rounded-sm cursor-pointer px-2 py-1 uppercase mr-4">decrement -1</button>
      <button onClick={reset} className="text-[12px] text-red-600 hover:bg-red-600 hover:text-white border-2 font-bold border-red-600 rounded-sm cursor-pointer px-2 py-1 uppercase mr-4">Reset</button>
    </div>
  )
}

export default Counter1;