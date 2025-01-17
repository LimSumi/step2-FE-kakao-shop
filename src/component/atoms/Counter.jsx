import { useState } from "react"

const Counter=({
    onChange, //최초수량
    onIncrease, //수량 증가
    onDecrease,//수량 감소
}) =>{
    const [count, setCount]= useState(1);

    const handleOnIncrease=()=>{
        setCount(count+1);
        onIncrease(count+1);

    };
    const handleOnDecrease=()=>{
        setCount(count-1);
        onIncrease(count-1);

    };

    return(
<div className="counter">
    <button onClick={handleOnDecrease}>-</button>
    <span className="count">{count}</span>
    <button onClick={handleOnIncrease}>+</button>
</div>

    )
};

export default Counter;