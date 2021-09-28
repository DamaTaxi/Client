import styled from 'styled-components';
import locationOnBar from '../../../../assets/images/TaxiPot/location_on_bar.png';
import taxiOnBar from '../../../../assets/images/taxi_on_bar.svg';

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
