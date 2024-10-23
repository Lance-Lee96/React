import React, { useState } from 'react';
import { call } from '../service/ApiService';

function AddProduct(props){

    let setItems = props.setItems;
    const[product, setProduct] = useState({productName:'',productStock:'',productPrice:''});
    const {productName,productStock,productPrice} = product;

    const onChange = (e) => {
        const {value,name} = e.target;
        setProduct({
            ...product,
            [name]:value 
        })
    }
    
    const onButtonClick = () => {
        call("/product","POST",product)
            .then(result => {setItems(result.data)})
        setProduct({productName:'',productStock:'',productPrice:''})
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