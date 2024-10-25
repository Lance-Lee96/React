import React, { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";


function Address() {

    //Daum 우편번호 API 스크립트 URL
    let scriptUrl = "http://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
    // useDaumPostcodePopup훅을 사용하여 API 를 팝업으로 실행할 준비
    const open = useDaumPostcodePopup(scriptUrl);

    const [postCode, setPostCode] = useState(''); //우편번호를 저장할 state
    const [address, setAddress] = useState('');//주소를 저장할 state
    const [detailAddress, setDetailAddress] = useState(''); //상세주소를 저장할 state
    const [extraAddress, setExtraAddress] = useState(''); //참고항목을 저장할 state

    //Daum Postcode API 에서 주소 선택 완료 후 실행되는 함수
    const handleComplete = (data) => {
        let addr = '' //주소를 저장하는 변수
        let extraAddr = ''; //참고항목 변수

        if (data.userSelectedType === 'R') {
            addr = data.roadAddress; //도로명 주소 선택시 도로명 주소 할당
        } else {
            addr = data.jibunAddress; //지번 주소 선택 시 지번 주소 할당
        }

        //참고항목을 처리

        //사용자가 선택한 주소 타임에 따라 주소를 설정
        //도로명 주소(R) 또는 지번 주소(J)를 선택했는지 확인
        if (data.userSelectedType === 'R') {
            //법정동명이 있는지 확인하고 추가
            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                extraAddr += data.bname;
            }
            //건물명이 있고 공동주택일 경우 추가
            if (data.buildingName !== '' && data.apartment === 'Y') {
                extraAddr += extraAddr !== '' ? ', ' + data.buildingName : data.buildingName;
            }

            //참고항목이 있다면 괄호로 감싸서 추가
            if (extraAddr !== '') {
                extraAddr = `(${extraAddr})`;
            }
            //참고항목 state 업데이트
            setExtraAddress(extraAddr);

        } else {
            //지번 주소인 경우 참고항목을 빈 문자열로 설정
            setExtraAddress('');
        }

        //우편번호, 주소를 state 에 세팅
        setPostCode(data.zonecode);
        setAddress(addr);

        //상세주소 입력 필드로 포커스를 이동
        document.getElementById('detailAddress').focus();
        
    }

    //팝업을 열고 완료시 handleComplete 함수 실행
    const handleClick = () => {
        open({ onComplete: handleComplete })
    }

    return (
        <div className="form-group">
            <div className="form-row">
                <input type="text" placeholder="우편번호" value={postCode} readOnly />
                <input type="button"
                    value="우편번호 찾기" onClick={handleClick} />
            </div>
            <input type="text" placeholder="주소" value={address}
                readOnly />
            <div className="form-row-split">
                <input id="detailAddress" onChange={(e) => setDetailAddress(e.target.value)} value={detailAddress} type="text" placeholder="상세 주소" />
                <input type="text" placeholder="참고 항목" value={extraAddress} readOnly />
            </div>
        </div>
    )
}

export default Address;