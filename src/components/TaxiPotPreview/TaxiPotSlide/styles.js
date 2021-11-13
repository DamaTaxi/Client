import styled from 'styled-components';
import nextButton from '../../../assets/images/TaxiPot/next-button.png';
import prevButton from '../../../assets/images/TaxiPot/prev-button.png';
import taxiOnBar from '../../../assets/images/taxi_on_bar.svg';
import locationOnBar from '../../../assets/images/TaxiPot/location_on_bar.png';

export const TaxiPotSlideBox = styled.div`
  position: relative;
  width: 100%;
  height: 475px;
  background-color: rgba(204, 158, 29, 19%);
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
    margin-top: 35px;
    width: 299px;
    height: 378px;
    border-radius: 15px;
    .swiper-pagination-current {
      color: red;
    }
    .slideSection {
      width: 300px;
      height: 353px;
      background-color: #ffffff;
      box-shadow: 0 15px 10px rgba(0, 0, 0, 19%);
      border-top-right-radius: 30px;
      display: flex;
      flex-direction: column;
      padding-left: 21px;
      #titleBox {
        width: 270px;
        height: 50px;
        margin: 19px 0 55px 0;
        h1 {
          font-size: 24px;
          font-family: 'NotoSansKR';
          font-weight: bold;
          margin-top: 20px;
          flex-wrap: wrap;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      p {
        font-family: 'NotoSansKR';
        font-weight: 540;
        font-size: 22px;
        padding-top: 12px;
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

export const GraphContainer = styled.div`
  width: 100%;
  height: 26px;
  display: flex;
  align-items: center;
  margin-top: 5px;
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
      padding-top: 6px !important;
    }
  }
`;