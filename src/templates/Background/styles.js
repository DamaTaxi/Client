import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #ffc044;
  overflow-x: hidden;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
  padding: 30px 40px;

  & span {
    color: white;
    font-size: 3.75rem;
    font-family: 'BlackHanSans';
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  }
`;

export const Section = styled.section`
  padding-left: 180px;
`;

export const Title = styled.img`
  margin-bottom: 40px;
`;

export const Subtitle = styled.div`
  display: flex;
  align-items: flex-end;

  & div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  & span {
    font-family: 'NotoSansKR';
    color: white;
    font-size: 2.5rem;
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
  margin-top: 80px;
  background-color: #ffffff;
  border-radius: 75px 75px 0 0;
`;

export const TaxiImg = styled.img`
  width: 1200px;
  height: 1200px;
  position: absolute;
  bottom: 30px;
  right: 0;
  margin-right: -350px;
`;
