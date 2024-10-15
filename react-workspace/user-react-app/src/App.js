import React from 'react';
import {useState, useEffect} from 'react';

import './App.css';
import { call } from './service/ApiService'
import { signout } from './service/ApiService';
import MyInfo from './users/MyInfo';


function App() {

  const [user,setUser] = useState([]);

  const [modify,setModify] = useState(false);

  useEffect(() => {
    //토큰을 같이 보냄
    call("/users/name","GET")
    .then(result => {setUser(result.data)})
  },[])
  
  // function isOpen(){
  //   if(!modify){
  //     setModify(true);
  //   }else{
  //     setModify(false);
  //   }
    
  // }

  return (
    <div className="App">
      {user.length > 0 &&(<p>{user[0].name}님 환영합니다 메인화면입니다.</p>)}
      
      <input type='button' value="로그아웃" onClick={signout}></input>
      <button onClick={() => {setModify(!modify)}} >정보 수정</button>
      {modify && <MyInfo />}
      
    </div>
  );
}

export default App;
