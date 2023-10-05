import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue } from '../redux/features/counter/CounterSlice';

const Counter = () => {

 const {count} = useSelector((state) => state.counter);
 const dispatch = useDispatch();
 console.log(count)

    return (
        <div>
            <button onClick={()=>dispatch(increment())}>increment</button>
            <br />
            {/*used action payload for incrment by 4  */}
            <button onClick={()=>dispatch(incrementByValue(4))}>increment by 4</button>
            <div>
                <h1>{count}</h1>
            </div>
            <button onClick={()=>dispatch(decrement())}>decrement</button>
        </div>
    );
};

export default Counter;