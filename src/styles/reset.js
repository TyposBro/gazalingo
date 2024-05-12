import { css } from "styled-components";
import { breakpoints } from "./utils";

export const reset = css`
  /* Delay remaining card movement */
  ::view-transition-group(*) {
    animation-timing-function: ease-in-out;
    animation-delay: 0.1s;
    animation-duration: 0.2s;
  }

  /* Delay container shrinking (shrink after cards have moved) */
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation-delay: 0.2s;
    animation-duration: 0s; /* Skip the cross-fade animation, resize instantly */
  }

  /* Adjust movement animation duration */
  ::view-transition-group(nav-right) {
    animation-duration: 1s;
    animation-delay: 0s;
  }

  /* Apply custom keyframe animation to old and new state */
  ::view-transition-image-pair(nav-right) {
    /* Bounce effect is achieved with custom cubic-bezier function */
    animation: navLeft 0.5s cubic-bezier(0.7, 2.2, 0.5, 2.2);
  }

  /* Animation keyframes */
  @keyframes navLeft {
    0% {
      transform: translateX(0%);
    }

    100% {
      transform: translateX(-50%);
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif !important;
  }
  html {
    //! ********************DISCLAIMER********************
    //* this resets Browser Defaults
    //* 1rem == 10px
    //! ********************DISCLAIMER********************
    font-size: 62.5%;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    /* @media only screen and (max-width: 350px) {
      font-size: 50%; //* 1rem = 8px
    } */
  }
  #root {
    width: 100dvw;
    height: 100dvh;
    overflow: hidden;
  }
`;
