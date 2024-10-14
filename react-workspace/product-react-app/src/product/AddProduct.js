import React, { useState } from 'react';
import { call } from '../service/ApiService';

function AddProduct(props){

    let setItems = props.setItems;

    //상품의 정보를 저장할 수 있는 state
    const[product, setProduct] = useState({productName:'',productStock:0,productPrice:0});

    const {productName,productStock,productPrice} = product;


    const onChange = (e) => {
        //이벤트가 일어난 대상에게서 value와 name을 가져온다.
        const {value,name} = e.target;
        setProduct({
            ...product, //기존의 input 객체를 복사한 뒤
            [name]:value //name 키를 가진 value로 설정
        })
    }

    //등록버튼을 눌렀을 때
    const onButtonClick = () => {
        //console.log("전송 정보 : " + product);

        //input태그에 들어있는 정보를 boot로 보낸다.
        call("/product","POST",product)
            .then(result => {setItems(result.data)})

        //입력필드 초기화
        setProduct({productName:'',productStock:0,productPrice:0})

        //입력창 닫기
        props.setOpen(false);
    }

    return(
        <div>
            <div><input onChange={onChange} value={productName} name='productName' placeholder="상품이름"/></div>
            <div><input onChange={onChange} value={productStock} name='productStock' placeholder="상품재고"/></div>
            <div><input onChange={onChange} value={productPrice} name='productPrice' placeholder="상품가격"/></div>
            <input type="button" value="등록" onClick={onButtonClick} />
        </div>
    )
}
export default AddProduct;