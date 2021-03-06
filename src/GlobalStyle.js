import { createGlobalStyle } from 'styled-components';
import { default as BlackHansSansFont } from './assets/fonts/BlackHanSans-Regular.ttf';
import { default as NotoSansKRFont } from './assets/fonts/NotoSansKR-Black.otf';
import { default as DoHyeonFont } from './assets/fonts/DoHyeon-Regular.ttf';
import { default as NotoSansCJKFont } from './assets/fonts/NotoSansCJKkr-Regular.otf';

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
  @font-face {
    font-family: 'NotoSansCJK';
    src: url(${NotoSansCJKFont})
  }
  html, body, #root {
    height: 100%;
  }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;

export default GlobalStyle;
