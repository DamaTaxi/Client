import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 48px 0 0 65px;
  width: 100%;
  .searchWrapper {
    width: 85%;
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 17px;
  }
  h1 {
    font-size: 24px;
    font-weight: bold;
    font-family: 'NotoSansCJK';
    margin-left: 8px;
  }
  #buttonWrapper {
    margin-right: 12px;
    position: absolute;
    right: 0;
  }
  #buttonWrapper > input[type='submit'] {
    width: 60px;
    height: 35px;
    background-color: #ffc044;
    border-radius: 6px;
    border: none;
    cursor: pointer;
  }
  .searchBar {
    width: 100%;
    height: 60px;
    border: solid #ffc044 3px;
    border-radius: 14px;
    font-family: 'NotoSansCJK';
    font-size: 22px;
    font-weight: 500;
    padding-left: 20px;
  }
  .searchBar:focus {
    outline: none;
  }
`;
