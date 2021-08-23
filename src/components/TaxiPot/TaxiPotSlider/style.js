import styled from 'styled-components';
import nextButton from '../../../assets/images/TaxiPot/next-button.png';
import prevButton from '../../../assets/images/TaxiPot/prev-button.png';
import slideYellowBox from '../../../assets/images/TaxiPot/slide-yellow-box.png';
import slideGrayBox from '../../../assets/images/TaxiPot/slide-gray-box.png';
import SlideSection from '../../../assets/images/TaxiPot/slider-section.png';
import taxiOnBar from '../../../assets/images/taxi_on_bar.svg';
import locationOnBar from '../../../assets/images/TaxiPot/location_on_bar.png';

export const TaxiPotSlideBox = styled.div`
  position: relative;
  width: 100%;
  height: 475px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  .swiper-container {
    position: static;
  }
  .mySwiper {
    width: 1400px;
    height: 450px;
  }
  .swiper-pagination {
    display: none;
  }
  .swiper-slide {
    position: relative;
    background-image: url(${slideYellowBox});
    margin-top: 35px;
    width: 299px;
    height: 378px;
    border-radius: 15px;
    .kakaoMap {
      background-image: url(${slideGrayBox});
      width: 100%;
      height: 270px;
      background-size: cover;
      object-fit: cover;
      text-align: center;
      padding-top: 50px;
    }
    .swiper-pagination-current {
      color: red;
    }
    .slideSection {
      left: 3%;
      bottom: 3%;
      padding-left: 8px;
      position: absolute;
      background-image: url(${SlideSection});
      background-size: cover;
      width: 278px;
      height: 153px;
      h1 {
        font-size: 0.9375rem;
        text-overflow: ellipsis;
        overflow: hidden;
        font-family: 'NotoSansKR';
        font-weight: bold;
        margin-top: 12px;
        padding-top: 2px;
      }
      p:nth-child(-1+3) {
        padding-top: 6px;
        font-family: 'NotoSansKR';
        font-weight: 540;
        font-size: 0.875rem;
      }
    }
    #currentId {
      color: red;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    width: 53.67px;
    height: 57.7px;
  }
  .swiper-button-prev {
    left: 3%;
    background-image: url(${prevButton}) !important;
  }
  .swiper-button-next {
    right: 3%;
    background-image: url(${nextButton}) !important ;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    content: '';
  }
  a {
    color: black;
    text-decoration: none;
    outline: none;
  }

  a:hover,
  a:active {
    text-decoration: none;
    background-color: #f59000;
  }
`;

export const TaxiPotPageLine = styled.div`
  position: relative;
  display: flex;
  width: 1400px;
  height: 34px;
  background-color: #f4e458;
  border-radius: 20px;
  .currentContainer {
    transition: 1.23s;
    position: relative;
    display: flex;
    justify-content: flex-end;
    height: 100%;
    width: ${(props) => (props.width ? `${props.width}%` : `0`)};
    border-radius: 20px;
    background-color: #ffc044;
    z-index: 10;
    div {
      position: absolute;
      top: -10px;
      right: -20px;
      display: flex;
      align-items: center;
      background-image: url(${taxiOnBar});
      width: 93px;
      height: 55px;
      text-align: center;
      p {
        font-size: 1.25rem;
        font-family: 'NotoSansKR';
        font-weight: bold;
        color: #ffffff;
        padding-left: 6.5px;
      }
    }
  }
  .allContainer {
    div {
      position: absolute;
      width: 79px;
      height: 105px;
      background-size: cover;
      right: 0;
      top: -65px;
      background-image: url(${locationOnBar});
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding-bottom: 10px;
      font-size: 1.25rem;
      font-family: 'NotoSansKR';
      font-weight: bold;
      color: #ffffff;
    }
  }
`;

