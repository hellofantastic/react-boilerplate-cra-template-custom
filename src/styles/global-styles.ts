import { createGlobalStyle } from 'styled-components';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    overflow-x: hidden;

  }

  body {
    font-family: 'Poppins', sans-serif;
    background: ${p => p.theme.background};
    background: linear-gradient(320deg, rgba(255,255,255,1) 0%, #f9f9f5 40%, rgba(255,255,255,1) 100%);
    color: ${p => p.theme.text};
    line-height: 1.3;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
  }

  body.fontLoaded {
    font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 0.9rem;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    vertical-align: baseline;
  }
  button{
    font-size: 0.95rem;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  button:focus{

  outline: none;

  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  
  menu, ol, ul {
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
  h2{
  font-size: 1.4rem
}

/*Simple Scroll Bar for file lists shows on hover*/
.simplebar-track.simplebar-vertical{
  right: -27px;
}
textarea{
  border: 1px solid rgb(53 91 125 / 20%);
  border-radius: 3px;
  padding: 5px 13px;
  font-family: inherit;
  font-size: 0.85rem;
  color: #355b7d;
  padding:10px;
  margin-bottom:10px;
}
`;
