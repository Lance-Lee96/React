import React, { useState } from 'react';

//컴포넌트 만들기
function Sol1(){
    const [eating, SetEating] = useState(['초콜릿','사탕'])
    const [value, SetValue] = useState("")

    //value의 값을 변경하겠다.
    const inputHandler = (e) => {
        SetValue(e.target.value);
    }

    //버튼을 클릭했을 때 value 를 eating에 추가
    const clickHandler = () => {
        SetEating([...eating, value])
        SetValue("");
    }

    return(
        <div>
            <input onChange={inputHandler} value={value}/>
            <button onClick={clickHandler}>추가</button>
            <ul>
                {eating.map(item => <li>{item}</li>)}
            </ul>
        </div>
    )
}

export default Sol1;