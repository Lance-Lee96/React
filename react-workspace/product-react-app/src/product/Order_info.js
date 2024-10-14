import React from "react";
import { useState, useEffect } from "react";
import {call} from '../service/ApiService';

function OrderInfo(){

    //db에서 주문내역을 가져오기 위한 hook
    const[orderList,setOrderList] = useState([]);

    useEffect(() => {
        call("/orders/total","GET")
        .then(result => {
            setOrderList(result.data);
        })
    },[])

    return(
        <div>
            <table border="1">
                <tr>
                    <th>상품 이름</th>
                    <th>상품 가격</th>
                    <th>주문 개수</th>
                    <th>결제 금액</th>
                    <th>주문 날짜</th>
                </tr>

                {orderList.map(order => (
                    <tr key={order.orderId}>
                        <td>{order.productName}</td>
                        <td>{order.productPrice}</td>
                        <td>{order.productCount}</td>
                        <td>{order.totalPrice}</td>
                        <td>{order.orderDate}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default OrderInfo;