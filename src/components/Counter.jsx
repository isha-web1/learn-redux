import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {

 const {count} = useSelector((state) => state.counter);
 console.log(count)

    return (
        <div>
            <button>increment</button>
            <div>
                <h1>{count}</h1>
            </div>
            <button>decrement</button>
        </div>
    );
};

export default Counter;