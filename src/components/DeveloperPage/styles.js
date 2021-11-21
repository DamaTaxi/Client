import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;

  & > img {
    position: absolute;
    z-index: -1;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  margin-bottom: 80px;

  & a {
    width: 230px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background-color: #ffc044;
    color: white;
    font-family: 'NotoSansCJK';
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding-left: 120px;
  margin-bottom: 100px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  & span {
    margin-bottom: 10px;
    font-family: 'BlackHanSans';
    font-size: 50px;
  }

  & p {
    color: #9a9a9a;
    font-family: 'DoHyeon';
    font-size: 30px;
  }
`;

export const MajorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding-left: 120px;
  margin-bottom: 150px;
`;

export const Major = styled.div`
  display: flex;
  align-items: center;
`;

export const MajorText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;

  & span {
    margin-bottom: 10px;
    font-family: 'BlackHanSans';
    font-size: 50px;
  }

  & p {
    color: #9a9a9a;
    font-family: 'DoHyeon';
    font-size: 30px;
  }
`;

export const Top = styled.div`
  display: flex;
  gap: 400px;
`;

export const Bottom = styled(Top)`
  gap: 360px;
`;

export const RoadImg = styled.img`
  right: -180px;
  bottom: -480px;
`;

export const TaxiImg = styled.img`
  right: -200px;
  bottom: 200px;
`;
