import React, { useState, useEffect } from "react";

function MyComponent3() {
    const [value, setValue] = useState(0);
    const [count, setCount] = useState(0);

  
    const countHandler = (e) => {
        console.log("count값이 바뀜")
        setCount(count + 1);
    }

    useEffect(() => {
        setValue(value + 1)
        console.log("렌더링 완료")
    }, [count])

    return(
        <div>
            <h2>Count : {count}</h2>
            <h2>랜더링 횟수 : {value}</h2>
            <button onClick={countHandler}>클릭 </button>
            </div>
    )
    }

    export default MyComponent3