import React, { useEffect, useRef } from 'react';

const CreateKakaoMap = (props) => {
  console.log(props);
  const { lat, lng, width, height } = props;
  const container = useRef(null);

  console.log(lat, lng);

  const options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new window.kakao.maps.LatLng(lat, lng),
    level: 3, //지도의 레벨(확대, 축소 정도)
  };

  useEffect(() => {
    new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
    return () => {};
  }, [lat, lng]);

  return (
    <div>
      <div className="map" style={{ width: width, height: height }} ref={container}></div>
    </div>
  );
};

export default CreateKakaoMap;
