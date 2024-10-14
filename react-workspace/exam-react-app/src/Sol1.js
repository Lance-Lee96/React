import React,{useState} from 'react'

function Sol1 () {
    const [eating, SetEating] = useState(['초콜릿','사탕'])
    const [value, SetValue] = useState("")
    const inputHandler = (e) => {
        SetValue(e.target.value)
    }
    const clickHandler =(e) => {
        SetEating([...eating, value])
        SetValue("")}
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
export default Sol1

