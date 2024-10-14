import React, { useState, useEffect } from "react";

function MyComponent2() {
    const [value, setValue] = useState("");
    const [count, setCount] = useState(0);

    const inputHandler = (e) => {
        console.log("input값이 바뀜");
        setValue(e.target.value);
    }

    const countHandler = (e) => {
        console.log("count값이 바뀜")
        setCount(count + 1);
    }

    useEffect(() => {
        console.log("렌더링 완료")
    }, [])

    return(
        <div>
            <h3>{count}</h3>
                <button onClick={countHandler}> + 1 </button>
                <hr />
                <input onChange={inputHandler} type="text" />
                <h3>{value}</h3>
            </div>
    )
    }

    export default MyComponent2