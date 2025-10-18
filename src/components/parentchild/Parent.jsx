import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child';

function Parent() {
    const [count, setCount] = useState(0);

    const items = useMemo(() => [
        { id: 1, name: "Apple" },
        { id: 2, name: "Mango" },
        { id: 3, name: "Orange" }   
    ], []);

    const handleClick = useCallback((id) => {
        console.log("Clicked Id : ", id);
    }, []);

    return (
        <div>
            <div className="flex flex-col justify-center items-center mt-2">
                <button className="text-[12px] text-red-600 hover:bg-red-600 hover:text-white border-2 font-bold border-red-600 rounded-sm cursor-pointer px-2 py-1 uppercase" onClick={() => setCount((c) => c + 1)}>Increment: {count}</button>
                <Child items={items} onClick={handleClick} />
            </div>
        </div>
    )
}

export default Parent