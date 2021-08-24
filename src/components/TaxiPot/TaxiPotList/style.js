import styled from 'styled-components';

export const TaxiPotListWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListHeader = styled.div`
  margin-top: 35px;
  width: 1470px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-family: 'NotoSansKR';
    font-size: 2rem;
    font-weight: bold;
  }
  a {
    display: flex;
    align-items: center;
    //택시팟 만들기 버튼(Link)
    background-color: #ffc044;
    width: 177px;
    height: 50px;
    border-radius: 50px;
    color: white;
    text-decoration: none;
    justify-content: center;
    p {
      font-family: 'NotoSansKR';
      font-weight: bold;
    }
    p:first-child {
      font-size: 44px;
      padding: 4px 8px 0 0;
    }
    p:nth-child(2) {
      font-size: 20px;
    }
  }
`;

export const ListContainer = styled.div`
  width: 1487px;
  height: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  a:nth-child(n + 2) {
    margin-top: 50px;
  }
`;

export const TaxiPotList = styled.div`
  width: 1457px;
  height: 172px;
  border: solid #ffc044 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  .list-title-wrapper{
    
  }
`;
