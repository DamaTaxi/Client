import { createGlobalStyle } from 'styled-components';
import { default as BlackHansSansFont } from './assets/fonts/BlackHanSans-Regular.ttf';
import { default as NotoSansKRFont } from './assets/fonts/NotoSansCJKkr-Regular.otf';
import { default as DoHyeonFont } from './assets/fonts/DoHyeon-Regular.ttf';

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

  @font-face {
    font-family: 'DoHyeon';
    src: url(${DoHyeonFont});
  }

  body {
    margin: 0;
    padding: 0;
  }

  p, h1, h2, h3 {
    margin: 0;
    padding: 0;
  }

  span {
    cursor: default;
  }
`;

export default GlobalStyle;
