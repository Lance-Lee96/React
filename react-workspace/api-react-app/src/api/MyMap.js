import React, { useState } from "react";
import { Map, MapInfoWindow, MapMarker } from "react-kakao-maps-sdk";

function MyMap() {

    const [result, setResult] = useState("");
    // const [position, setPosition] = useState(null);
    const [markers, setMarkers] = useState([])

    const [activeMarker, setActiveMarker] = useState(null)

    const center = {
        lat: 33.450701,
        lng: 126.570667
    }

    //지도 클릭시 마커 추가
    const handleMapClick = (event, mouseEvent) => {
        const latlang = mouseEvent.latLng //좌표를 저장
        setResult(`클릭한 위치의 위도는 ${latlang.getLat()} 이고, 경도는 ${latlang.getLng()} 입니다.`)
        const newMarker = {
            id: markers.length,
            position: {
                lat: latlang.getLat(),
                lng: latlang.getLng()
            },
            info: `마커 위치: (${latlang.getLat()},${latlang.getLng()})`
        }
        setMarkers([...markers, newMarker])
    }

    //마커에 마우스를 올렸을 때 인포 윈도우 활성화하기
    const handleMouseOver = (id) => {
        setActiveMarker(id);
    }

    //마커에서 마우스를 뺐을때 인포윈도우 비활성화
    const handleMouseOut = () => {
        setActiveMarker(null);
    }

    return (
        <div>
            <Map
                center={center}
                style={{ width: '600px', height: '600px' }}
                level={3}// 지도 확대 정도 숫자가 작을수록 크게, 클수록 작게 보임
                onClick={handleMapClick}
            >
                {markers.map(marker => (
                    <MapMarker
                        key={marker.id}
                        position={marker.position}
                        onMouseOver={() => handleMouseOver(marker.id)}
                        onMouseOut={handleMouseOut}
                    >
                        {/* 마커에 자식요소를 넣으면 자동으로 info로 들어간다. */}
                        {activeMarker === marker.id && (
                                <div style={{ padding: "5px", color: "#000" }}>
                                    {marker.info}
                                </div>
                            )}

                    </MapMarker>
                ))}
                {/* 마커는 좌표위에 생성이 된다. */}
                {/* <MapMarker
                //{position ?? center} position에 값이 없으면 center를 사용해라
                position={position ?? center}/> */}

                {/* 인포 윈도우 생성하기 */}
                 <MapInfoWindow //인포윈도우를 생성하고 지도에 표시한다.
                    position={center} //인포 윈도우가 표시될 위치

                    removable={true}//인포 윈도우를 닫을 수 있는 x버튼 표시

                    
                >
                    <div style={{ padding: '5px', color: "#000" }}>Hello World</div>
                </MapInfoWindow>
            </Map>
            <p>
                지도를 클릭해주세요!
            </p>
            <p id="result">{result}</p>
        </div>
    )
}

export default MyMap

/*
Map
카카오 지도를 생성하고 표시하는 컴포넌트
지도 자체를 렌더링하고 마커나 인포윈도우를 배치할 수 있다.

주요 prop
center:{lat,lng} 형태의 객체로 지도의 중심 좌표를 지정 (필수 속성)
style : 지도 컨테이너의 CSS 스타일을 지정 보통 너비와 높이 지정
onClick : 지도를 클릭했을 때 호출되는 이벤트 핸들러
클릭된 좌표를 반환

MapInfoWindow
마커나 지도위에 정보를 표시하는 윈도우

주요 prop
position : 인포 윈도우의 위치 좌표
removable : 닫기 버튼을 활성화 할지 여부
content: 인포 윈도우에 표시할 내용

(event, MouseEvent) => {
                    const latlang = MouseEvent.latLng
                    setResult(`클릭한 위치의 위도는 ${latlang.getLat()} 이고, 경도는 ${latlang.getLng()} 입니다.`)
                    setPosition({
                        lat: latlang.getLat(),
                        lng: latlang.getLng()
                })
                }
*/