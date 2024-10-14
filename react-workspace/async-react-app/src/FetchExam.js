import React, {useState, useEffect} from "react";

function FetchExam(){
    const [post, SetPost] = useState([]); // 데이터를 저장할 state
    const [loading, SetLoading] = useState(true); // 로딩 상태 관리
    const [error,SetError] = useState(null); // 에러 상태 관리
    
    useEffect(() => {
        // 비동기적으로 데이터 호출
        const fetchData = async () => {
            try{
                //jsonplaceholder로 부터 얻어온 데이터를 response에 저장
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                //response 객체
                //서버로부터 응답을 나타내는 객체
                //ok : HTTP상태 코드가 200 ~ 299범위에 있을 경우 true, 그렇지 않으면 false
                //HTTP(Hyper Text Transfer Protocol)
                // - HTML 문서와 같은 리소스를 가져올 수 있도록 해주는 규약(Protocol)이다.
                // - 웹에서 이루어지는 모든 데이터 교환의 기초
                // - 클라이언트 <-> 서버 프로토콜이라고 하기도 한다.

                //HTTP 상태코드
                //브라우저는 서버에 보내주는 상태코드를 보고 request가 성공했는지 실패했는지를 판단한다.
                //2XX : 성공을 알리는 상태코드 대표적으로 200(성공)
                //3XX : 리다이렉션(다른페이지)을 알리는 상태코드
                //4XX : 요청 오류를 나타낸다. 요청 자체에 오류가 있다.
                // 대표적으로 400(잘못된 요청), 401(권한 없음), 403(금지됨), 404(찾을 수 없음)
                //5XX : 서버 오류. 요청은 제대로 왔지만 서버에 오류가 생겼을 때 발생
                // 대표적으로 500(내부 서버 오류)
                if(!response.ok){
                    throw new Error('데이터를 불러오는데 실패했습니다.');
                }
                //받아온 데이터를 json으로 변환 
                const data = await response.json()
                SetPost(data); //상태에 데이터를 저장
            } catch(err){
                SetError(err.message);//에러 처리
            } finally{
                SetLoading(false); //로딩 상태를 완료로 설정
            }
        }

        fetchData(); //함수 호출

    },[]);// 컴포넌트가 처음 렌더링될 때 한 번만 실행

    //로딩중일 때 보여줄 내용
    if(loading){
        return (<p>로딩중....</p>);
    }
    //에러 발생 시 보여줄 내용
    if(error){
        return <p>에러발생 : {error}</p>
    }

    //데이터를 성공적으로 불러왔을 대 보여줄 내용
    return(
        <div>
            <h1>게시글 목록</h1>
            {/* post.slice(0,10)는 posts 배열에서 인덱스 0번부터 9까지의
            첫 10개의 게시글을 잘라서 새로운 배열에 반환한다. 
            
            ()를 사용하면 암시적 반환 함수가 표현식의 결과를 자동으로 반환
            이때 return 키워드를 적지 않아도 된다.*/}
            <ul>
                {post.slice(0,10).map((post)=>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )

}

export default FetchExam