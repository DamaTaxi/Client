import styled from 'styled-components';
import nextButton from '../../../assets/images/TaxiPot/next-button.png';
import prevButton from '../../../assets/images/TaxiPot/prev-button.png';
import slideYellowBox from '../../../assets/images/TaxiPot/slide-yellow-box.png';
import slideGrayBox from '../../../assets/images/TaxiPot/slide-gray-box.png';
import SlideSection from '../../../assets/images/TaxiPot/slider-section.png';



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
    .map {
      margin: 7px 0 0 7px;
      border-radius: 8px;
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
      p {
        padding-top: 8px;
      }
      h1 {
        font-size: 0.9375rem;
        text-overflow: ellipsis;
        overflow: hidden;
        font-family: 'NotoSansKR';
        font-weight: bold;
        margin-top: 12px;
        margin-bottom: 10px;
        padding-top: 2px;
      }
      p:nth-child(-1 + 3) {
        padding-top: 12px;
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


