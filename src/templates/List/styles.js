import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
`;

export const Title = styled.span`
  margin-bottom: 40px;
  font-family: 'NotoSansKR';
  font-size: 3.75rem;
  font-weight: bold;
`;

export const ListContainer = styled.ul`
  width: 1300px;
  height: 780px;
  position: relative;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);

  & span {
    cursor: pointer;
  }
`;

export const List = styled.li`
  height: 130px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 4px solid #d4d4d4;
  font-size: 2.5rem;
  font-family: 'NotoSansCJK';
  cursor: pointer;

  & span:first-child {
    position: absolute;
    left: 50px;
    border: 2px solid #707070;
    padding: 0 20px;
    color: #ffc044;
  }
`;

export const PageNum = styled.li`
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 1.5rem;

  & span {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e4e4e4;
  }
`;

export const Left = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid #979797;
`;

export const Right = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #979797;
`;
