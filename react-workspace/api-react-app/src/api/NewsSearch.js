import React, { useState } from "react";
import axios from "axios";

function NewsSearch() {

    const [query, setQuery] = useState('') // 검색어 state
    const [result, setResult] = useState([]) //검색 결과 state
    const [loading, setLoading] = useState(false); //로딩 상태
    const [error, setError] = useState(null);

    // 네이버 뉴스 API 호출 함수
    const searchNews = () => {
        setLoading(true);
        setError(null);

        // const clientId = 'YtlYwC2To4JlFQVpIpfE'; // 네이버에서 발급받은 Client ID
        // const clientSecret = '67EoD7Tqms'; // 네이버에서 발급받은 Client Secret

        try {
            const response = axios.get('http://localhost:9090/api/news', {
                params: {query}   
            })

            // 검색 결과를 result 상태에 저장
            response.then(res => setResult(res.data.items))
        } catch (err) {
            setError('뉴스 검색에 실패했습니다.');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        if(!query){
            alert('검색어를 입력하세요');
            return;
        }
        e.preventDefault(); //새로고침을 강제로 막음
        searchNews();
      };

    return(
        <div>
            <h1>네이버 뉴스 검색</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="뉴스 이름을 입력하세요"
                    />
                    <button type="submit">검색</button>
            </form>

            {loading && <p>검색 중...</p>}
            {error && <p>{error}</p>}

            <ul>
                {result.map((news) => (
                    <li key={news.title}>
                        
                        <p><h1>제목: {news.title}</h1></p>
                        <p>원문링크: {news.originallink}</p>
                        <p>요약: {news.description}</p>
                        <p>게시날짜 : {news.pubDate}</p>
                        <p>링크: {news.link ? news.link : news.originallink}</p>
                        <a href={news.link} target="_blank" rel="noopener noreferrer">더보기</a>
                    </li>
                ))}
            </ul>




        </div>
    )
    
}
export default NewsSearch;