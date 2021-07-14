import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 1000px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #ffc044;
  overflow-x: hidden;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 80px;

  & span {
    color: white;
    font-size: 45px;
    padding: 30px 0 30px 45px;
    font-family: 'BlackHanSans';
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  }
`;

export const Section = styled.section`
  padding-left: 200px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  & img {
    width: 450px;
  }

  & span {
    font-family: 'BlackHanSans';
    font-size: 3.75rem;
    color: white;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    margin-left: 30px;
    position: relative;
    top: 20px;
  }
`;

export const Subtitle = styled.div`
  display: flex;

  align-items: flex-end;

  & div {
    display: flex;
    flex-direction: column;
  }

  & span {
    font-family: 'NotoSansKR';
    color: white;
    font-size: 1.875rem;
    font-weight: bold;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  }

  & > span {
    margin-left: 120px;
  }
`;

export const BackgroundBottom = styled.div`
  width: 100%;
  height: 500px;
  margin: auto 0 0 0;
  background-color: #ffffff;
  border-radius: 75px 75px 0 0;
`;

export const TaxiImg = styled.img`
  width: 800px;
  height: 800px;
  position: absolute;
  right: 0;
  margin-right: -230px;
`;
