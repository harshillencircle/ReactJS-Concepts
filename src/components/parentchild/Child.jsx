import React from 'react'

const Child = React.memo(function Child({ items, onClick }) {
    console.log("Child Rendered!");
    return (
        <div>
            <ul>
                {items.map((item) => {
                    <li key={item.id} onClick={() => onClick(item.id)}>{item.name}</li>
                })}
            </ul>
        </div>
    );
});

export default Child