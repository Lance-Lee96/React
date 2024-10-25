import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [movie, setMovie] = useState([]);

  //useEffect
  //컴포넌트가 렌더링 된 후에 실행된다.

  let options = {
    headers:{
      "Content-Type":"application/json"
    },
    url : '	http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.xml?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20240901',
    method : 'get'
  }

  //버튼을 누르기 전까지는 절대 실행이 안됨
  const handleClick = () => {
    axios(options)
    .then(response => {
      console.log(response.data.boxOfficeResult.dailyBoxOfficeList);
    })
  }

  return (
    <div className="App">
      <button onClick={handleClick}>일별 박스오피스 내용 가져오기</button>
    </div>
  );
}

export default App;
