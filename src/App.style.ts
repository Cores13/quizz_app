import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./img/background.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        width: 100%;
    }

    * {
        color: white;
        box-sizing: border-box;
        font-family: 'Encode Sans SC', sans-serif;
    }

    .App {
        width: 100%;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0 auto;
  }

  h1 {
    font-family: "Tourney", cursive;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3),
      rgba(255, 255, 255, 0.2)
    );
    border: 1px solid #0085a3;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    font-size: 1rem;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    min-width: 200px;
  }

  .loading {
    margin-top: 70px;
    font-size: 2rem;
  }
`;
