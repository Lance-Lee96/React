import React from "react";
import { useState, useEffect } from "react";
import { call } from "../service/ApiService";


function MyInfo(){
    const [user,setUser] = useState({
        userId:'',
        pwd:'',
        name:'',
        email:''
    });

    useEffect(() => {
        //토큰을 같이 보냄
        call("/users/name","GET")
        .then(result => {setUser(result.data[0])})
      },[])

      const handleChange = (e) => {
        const {name, value} = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]:value
        }))
      }

      if(!user.userId) {
        return <div>Loading...</div>
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);//form태그의 정보를 얻어온다.
        const userId = user.userId
        const pwd = data.get("pwd");
        const name = data.get("name");
        const email = data.get("email");

        console.log('userId : ' + userId)
        console.log('pwd : ' + pwd)
        console.log('name : ' + name)
        console.log('email : ' + email)
        call("/users","PUT",{userId:userId,pwd:pwd,name:name,email:email})
            .then(result => {
                window.location.href="/main";
            })

      }


    return(
        <form noValidate style={{margin : "10px"}} onSubmit={handleSubmit}>
        <table border="1" align="center">
            <thead></thead>
            <caption>:::내 정보:::</caption>
            <tbody>
            <tr>
                <th>아이디</th>
                <td>{user.userId}</td>
            </tr>
            <tr>
                <th>비밀번호</th>
                <td><input name="pwd" value={user.pwd} onChange={handleChange}/></td>
            </tr>
            <tr>
                <th>이름</th>
                <td><input name="name" value={user.name} onChange={handleChange}/></td>
            </tr>
            <tr>
                <th>이메일</th>
                <td><input name="email" value={user.email} onChange={handleChange}/></td>
            </tr>
            <tr>
                        <td colSpan="2" align="center">
                            <input type="submit" value="수정" />
                            <input type="button" value="취소" onClick={()=>window.location.href="/main"}/>
                        </td>
                </tr>
                </tbody>
        </table>
        </form>
        
    )
}

export default MyInfo;