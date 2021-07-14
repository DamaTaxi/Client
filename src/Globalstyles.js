import { createGlobalStyle } from 'styled-components';
import { default as BlackHansSansFont } from './assets/fonts/BlackHanSans-Regular.ttf';
import { default as NotoSansKRFont } from './assets/fonts/NotoSansCJKkr-Regular.otf';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'BlackHanSans';
    src: url(${BlackHansSansFont});
  }

  @font-face {
    font-family: 'NotoSansKR';
    src: url(${NotoSansKRFont});
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
