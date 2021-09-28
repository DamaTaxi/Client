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
const content = [
  {
    title: '둔산동 꿀잼동전노래연습장',
    target: '2학년',
    reserve: 3,
    all: 4,
  },
  {
    title: '둔산동 꿀잼동전노래연습장',
    target: '2학년',
    reserve: 3,
    all: 4,
  },
  {
    title: '둔산동 꿀잼동전노래연습장',
    target: '2학년',
    reserve: 3,
    all: 4,
  },
  {
    title: '둔산동 꿀잼동전노래연습장',
    target: '2학년',
    reserve: 3,
    all: 4,
  },
  {
    title: '둔산동 꿀잼동전노래연습장',
    target: '2학년',
    reserve: 3,
    all: 4,
  },
];

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

  useEffect(() => {
    requestWithAccessToken('get', `/taxi-pot/slide?size=${4}&page=${current}`, {}, {})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      }); //method, url, headers, data
  }, [current]);

  //슬라이더 리스트 map 함수
  const SwiperSlideList = content.length
    ? content.map((swiperSliderList, index) => {
        const { title, target, reserve, all, latitude, longitude } = swiperSliderList;
        return (
          <SwiperSlide key={index}>
            <Link to="/">
              <>
                <CreateKakaoMap
                  lat={37.5534058965367}
                  lng={126.925802180069}
                  width={`95%`}
                  height={`201px`}
                  className="kakaoMap"
                ></CreateKakaoMap>
              </>
              <>
                <div className="slideSection">
                  <h1>{title}</h1>
                  <p>주소 : 대전 중구 중구보건소</p>
                  <p>대상자 : {target}</p>
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
          autoplay={{ delay: 10000 }}
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
