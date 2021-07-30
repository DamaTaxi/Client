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
  .test {
    width: 100%;
    background-color: red;
  }
  .swiper-container {
    position: static;
  }
  .mySwiper {
    width: 1607px;
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
    .grayBox {
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
      left: 7%;
      bottom: 3%;
      padding-left: 12px;
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
      p {
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

export const TaxiPotPageLine = styled.div``;

export const GraphContainer = styled.div`
  width: 100%;
  height: 26px;
  display: flex;
  align-items: center;
  .yellowBorderBox {
    position: relative;
    width: 118px;
    height: 20px;
    border: #ffc044 1px solid;
    margin: 5px 0 0 14px;
  }
  .filledBox {
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => (props.width ? `${props.width}%` : `0`)};
    height: 100%;
    background-color: #ffc044;
    text-align: center;
    p {
      text-align: center;
      position: absolute;
      left: 45px;
      top: -6px;
    }
  }
`;
