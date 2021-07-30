import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const swiperSliderList = [
  {
    title: '둔산동 꿀잼동전노래연습장',
    target: '2학년',
    reserve: 3,
    all: 4,
    price: 10000,
  },
  {
    title: '대덕소프트웨어마이스터고등학교',
    target: '3학년',
    reserve: 1,
    all: 2,
    price: 123_123,
  },
];

const TaxiPotSlider = () => {
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(0);

  const percentFunc = (reserve, all) => {
    if (reserve < 1 || reserve > all) {
      console.log(`올바른 값이 아닙니다`);
      return;
    }
    var result = (reserve / all) * 100;
    return result;
  };

  const SwiperSlideList = swiperSliderList.length
    ? swiperSliderList.map((swiperSliderList, index) => {
        console.log(swiperSliderList);
        const { title, target, reserve, all, price } = swiperSliderList;
        return (
          <SwiperSlide key={index}>
            <Link to="/">
              <div className="grayBox">구글맵</div>
              <div className="slideSection">
                <h1>{title}</h1>
                <p>대상자 : {target}</p>
                <p>km: 9.8km</p>
                <p>예상가격: {price}원</p>
                <S.GraphContainer width={percentFunc(reserve, all)}>
                  <p>현재 인원수 : </p>
                  <div className="yellowBorderBox">
                    <div className="filledBox">
                      <p>
                        {reserve}/{all}
                      </p>
                    </div>
                  </div>
                </S.GraphContainer>
              </div>
            </Link>
          </SwiperSlide>
        );
      })
    : '로딩중';

  return (
    <S.TaxiPotSlideBox>
      <Swiper
        slidesPerView={4}
        spaceBetween={100}
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
      <div className="test"></div>
    </S.TaxiPotSlideBox>
  );
};

TaxiPotSlider.defaultProps = {
  swiperSliderList: [],
};

export default TaxiPotSlider;
