import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import GraphContainer from '../../../templates/GraphContainer/GraphContainer';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import CreateKakaoMap from '../../../templates/CreateKakaoMap/CreateKakaoMap';
import TaxiPotPageLine from './TaxiPotPageLine/TaxiPotPageLine';
import { requestWithAccessToken } from '../../../lib/axios';

SwiperCore.use([Navigation, Pagination, Autoplay]);

//더미 데이터
let content = [];

const TaxiPotSlider = () => {
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(0);
  //현재 인원수 %값 알려주는 함수
  const percentFunc = (reserve, all) => {
    if (reserve < 1 || reserve > all) {
      console.log(`올바른 값이 아닙니다`);
      return;
    }
    var result = (reserve / all) * 100;
    return result;
  };

  const targetFunc = (target) => {
    switch (target) {
      case 'FRESHMAN':
        return '1학년';
      case 'SOPHOMORE':
        return '2학년';
      case 'SENIOR':
        return '3학년';
      case 'ALL':
        return '전체';
      default:
        break;
    }
  };

  useEffect(() => {
    content = [];
    getSlideList();
  }, []);

  function getSlideList() {
    requestWithAccessToken('get', `/taxi-pot/slide`, {}, {})
      .then((res) => {
        console.log(res);
        content = content.concat(res);
      })
      .catch((err) => {
        console.log(err);
      }); //method, url, headers, data
  }

  //슬라이더 리스트 map 함수
  const SwiperSlideList = content.length
    ? content.map((content, index) => {
        const { title, target, reserve, all, latitude, longitude, id, address } = content;
        console.log(content);
        return (
          <SwiperSlide key={index}>
            <Link
              to={{
                pathname: `/user-taxi-pot:${id}`,
                state: {
                  id: id,
                },
              }}
            >
              <>
                <CreateKakaoMap
                  lat={latitude}
                  lng={longitude}
                  width={`95%`}
                  height={`201px`}
                  className="kakaoMap"
                ></CreateKakaoMap>
              </>
              <>
                <div className="slideSection">
                  <h1>{title}</h1>
                  <p>주소 : {address}</p>
                  <p>대상자 : {targetFunc(target)}</p>
                  <GraphContainer reserve={reserve} all={all} left={40} width={118} height={20} marginTop={11} />
                </div>
              </>
            </Link>
          </SwiperSlide>
        );
      })
    : '로딩중';

  return (
    <S.TaxiPotSlideBox>
      <TaxiPotPageLine percentFunc={percentFunc} current={current} total={total} />
      <>
        <Swiper
          slidesPerView={4}
          spaceBetween={70}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            type: 'custom',
            renderCustom: function (swiper, current, total) {
              setCurrent(current);
              setTotal(total);
              return current + total;
            },
          }}
          navigation={true}
          className="mySwiper"
          autoplay={{ delay: 2500 }}
        >
          {SwiperSlideList}
        </Swiper>
      </>
    </S.TaxiPotSlideBox>
  );
};

TaxiPotSlider.defaultProps = {
  content: [],
};

export default TaxiPotSlider;
