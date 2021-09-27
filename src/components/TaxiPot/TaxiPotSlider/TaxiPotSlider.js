import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import GraphContainer from '../../../templates/GraphContainer/GraphContainer';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const swiperSliderList = [
  {
    title: '대덕소프트웨어마이스터고등학교 니엄마 13시 레게노 ㅁㄴ안마ㅁㄴㅇㅁㄴㅁㄴㄴㅇㅁㄴㅁㄴㅁ',
    target: '2학년',
    reserve: 3,
    all: 4,
    price: 10000,
  },
  {
    title: '둔산동 꿀잼동전노래연습장',
    target: '2학년',
    reserve: 3,
    all: 4,
    price: 10000,
  },
  {
    title: '둔산동 꿀잼동전노래연습장',
    target: '2학년',
    reserve: 3,
    all: 4,
    price: 10000,
  },
  {
    title: '둔산동 꿀잼동전노래연습장',
    target: '2학년',
    reserve: 3,
    all: 4,
    price: 10000,
  },
  {
    title: '둔산동 꿀잼동전노래연습장',
    target: '2학년',
    reserve: 3,
    all: 4,
    price: 10000,
  },
];

const TaxiPotSlider = () => {
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(0);

  //3자리수 마다 콤마 찍어주는 함수
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  //현재 인원수 %값 알려주는 함수
  const percentFunc = (reserve, all) => {
    if (reserve < 1 || reserve > all) {
      console.log(`올바른 값이 아닙니다`);
      return;
    }
    var result = (reserve / all) * 100;
    return result;
  };

  /*   useEffect(()=> {
    api.getlist();
  }, [page]) */

  //슬라이더 리스트 map 함수
  const SwiperSlideList = swiperSliderList.length
    ? swiperSliderList.map((swiperSliderList, index) => {
        const { title, target, reserve, all } = swiperSliderList;
        return (
          <SwiperSlide key={index}>
            <Link to="/">
              <div className="slideSection">
                <div id="titleBox">
                  <h1>{title}</h1>
                </div>
                <div>
                  <p>대상자 : {target}</p>
                  <p>km: 9.8km</p>
                  <GraphContainer reserve={reserve} all={all} width={120} height={20} left={42} marginTop={15} />
                  {/* reserve, all, width, height, left */}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        );
      })
    : '로딩중';

  return (
    <S.TaxiPotSlideBox>
      <S.TaxiPotPageLine width={percentFunc(current, total)}>
        <div className="currentContainer">
          <div>
            <p>{current}번째</p>
          </div>
        </div>
        <div className="allContainer">
          <div>{total}개</div>
        </div>
      </S.TaxiPotPageLine>
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
          autoplay={{ delay: 3500 }}
        >
          {SwiperSlideList}
        </Swiper>
      </>
    </S.TaxiPotSlideBox>
  );
};

TaxiPotSlider.defaultProps = {
  swiperSliderList: [],
};

export default TaxiPotSlider;
