import React, {useState, useRef} from "react";

function InputSample () {
    const [inputs, setInputs] = useState({
        이름 : "",
        nickname : "",
    });

    const nameFocus = useRef();

    const {이름, nickname} = inputs;
    
    const onChange = (e) => {
        //e.target : 이벤트가 발생하는 주체
        //value : 그 요소의 현재 값
        //name : 요소의 name 속성
        const {value, name} = e.target;
        setInputs({
            ...inputs,//기존의 상태를 복사
            [name] : value // 그 태그에 value를 변경해줘
        })
    }

    const onReset = () => {
        setInputs({
          이름: "",
          nickname: "",
        });
        nameFocus.current.focus();
      };

    return(
        <div>
            <input
                name = "이름"
                placeholder="이름을 작성해주세요."
                value={이름}
                ref={nameFocus}
                onChange={onChange}
            />
            <input
                name = "nickname"
                placeholder="닉네임을 쓰세요."
                onChange={onChange}
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {이름}({nickname})
            </div>
        </div>
    )

}
export default InputSample