import React, { useState, useEffect } from 'react';
import * as S from './style';
import SearchForm from '../SearchForm/SearchForm';

const { kakao } = window;

const SearchListMap = (props) => {
  const { onChagneSearchContent, onSubmitSearchContent, currentItemIndex, onSubmitEvent, onChangeSearch, onClickList } =
    props;
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    var markers = [];
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(onSubmitSearchContent, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();
        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        map.setBounds(bounds);
        setPlaces(data);
      }
    }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      kakao.maps.event.addListener(marker, 'mouseover', function () {
        infowindow.setContent(
          '<span style="padding:3px;font-size:12px;display:inline-block;width:102%;">' + place.place_name + '</span>',
        );
        infowindow.open(map, marker);
      });
    }
  }, [onSubmitSearchContent]);

  return (
    <S.MainSection>
      <S.SearchListWrapper>
        <SearchForm
          onSubmitEvent={onSubmitEvent}
          onChangeSearch={onChangeSearch}
          value={onChagneSearchContent}
        ></SearchForm>
        <S.SearchList>
          {places.map((item, index) => {
            return (
              <S.SearchListItem
                key={index}
                onClick={() => {
                  onClickList(item, index);
                }}
                style={
                  currentItemIndex === index
                    ? { background: 'rgba(255, 192, 68, 0.28)', borderBottom: '#FFC044 solid 3px' }
                    : {}
                }
              >
                <div id="location-image"></div>
                <div>
                  <h1>{item.place_name}</h1>
                  {item.road_adress_name ? <p>{item.road_address_name}</p> : <p>{item.address_name}</p>}
                </div>
              </S.SearchListItem>
            );
          })}
        </S.SearchList>
      </S.SearchListWrapper>
      <S.KakaoMapWrapper>
        <div id="designBox">도착지 검색</div>
        <div id="map"></div>
      </S.KakaoMapWrapper>
    </S.MainSection>
  );
};

export default SearchListMap;
