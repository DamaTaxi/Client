import styled from 'styled-components';
import location_on_bar from '../../../../assets/images/location_on_bar.svg';

export const MainSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const SearchListWrapper = styled.div`
  width: 810px;
  height: 630px;
  background-color: white;
  border-radius: 26px;
  margin-top: 59px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 16%);
`;

export const KakaoMapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 740px;
  height: 690px;
  #designBox {
    width: 235px;
    height: 60px;
    background-color: #ffc044;
    border-top-left-radius: 41px;
    font-family: 'DoHyeon';
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
  }
  #map {
    width: 100%;
    height: 630px;
    border-radius: 17px;
    border-top-right-radius: 0;
  }
`;

export const SearchList = styled.div`
  width: 85%;
  height: 450px;
  background-color: white;
  border-radius: 5px;
  margin-left: 65px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 16%);
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    /* 스크롤바 막대 높이 설정 */
    height: 17%;
    background-color: #ffc044;
    /* 스크롤바 둥글게 설정 */
    border-radius: 10px;
  } /* 스크롤바 뒷 배경 설정*/
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const SearchListItem = styled.div`
  width: 100%;
  height: 112px;
  border-bottom: #d4d4d4 solid 2px; /* #d4d4d4 solid 2px; */
  transition: 0.6s;
  display: flex;
  align-items: center;
  cursor: pointer;
  #location-image {
    background-image: url(${location_on_bar});
    background-size: cover;
    object-fit: cover;
    width: 23px;
    height: 36px;
    margin-left: 28px;
  }
  div:nth-child(2) {
    margin-left: 18px;
  }
  div:nth-child(2) > h1 {
    font-size: 28px;
    font-family: 'NotoSansCJK';
  }
  div:nth-child(2) > p {
    font-family: 'NotoSansCJK';
    font-size: 18px;
    color: #8d8d8d;
  }
`;
