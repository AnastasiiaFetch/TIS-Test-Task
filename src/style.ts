import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Pictures } from "./types/picture";

export const StyledApp = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  }

  html {
  font-size: 15px;
  }

  a {
  text-decoration: none;
  color: inherit;
  }

  body {
  background-color: #D8D8F6;
  background-attachment: fixed;

  color: #000000a6;
  }

 ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: #fff;
    border-radius: 4px;
  }
`;

export const FlexLayout = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  width: 100%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  padding: 1rem 2rem;

  & > a {
    padding: 0.25rem;
    border: 1.5px solid transparent;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  padding: 0 2rem;
  margin: 2rem 0;
`;

export const CardWrapper = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  width: 20rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: #fff;
  cursor: pointer;

  &:hover {
    box-shadow: 5px 5px 10px 0px rgb(0 0 0 / 36%);
  }

  & > div:not(:first-of-type) {
    width: 100%;
    & > span {
      font-weight: 600;
    }
  }
`;

export const CardPhoto = styled.div<{ $src: Pictures }>`
  background-image: ${(props) => `url(${props.$src.large})`};
  min-width: 8rem;
  height: 8rem;
  background-repeat: no-repeat;
  align-self: center;
  border-radius: 5rem;
  background-position: center;

  @media only screen and (max-width: 768px) {
    background-image: ${(props) => `url(${props.$src.medium})`};
    min-width: 4.5rem;
    height: 4.5rem;
  }

  @media only screen and (max-width: 480px) {
    background-image: ${(props) => `url(${props.$src.thumbnail})`};
    min-width: 2.5rem;
    height: 2.5rem;
  }
`;

export const WeatherBar = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 0.5rem;
  margin: 0.5rem 0;

  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & > div > span:first-of-type {
      text-decoration: underline;
    }

    & > div > span:last-of-type {
      font-weight: 600;
      padding: 0 0.5rem;
    }
  }

  & > div:last-child {
    align-items: center;
    justify-content: center;
  }
`;

export const CardButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 1rem;
`;

export const CustomButton = styled.button<{
  $color?: string;
  $borderColor?: string;
}>`
  background-color: ${(props) => props.$color || "#EAE9EC"};
  border: ${(props) =>
    props.$borderColor
      ? `1px solid ${props.$borderColor}`
      : "1px solid #ccc8d0"};

  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  text-transform: uppercase;
  font-weight: 600;
  align-self: start;
`;

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(200 200 200 / 60%);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  & > button {
    align-self: flex-end;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-top: 1.5rem;
  gap: 2rem;

  & > div:first-of-type {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1rem;

    & span:first-of-type {
      font-weight: 600;
    }

    & span:last-of-type {
      padding: 0 0.5rem;
    }
  }

  & > div:last-of-type {
    display: grid;
    margin-bottom: 1.5rem;
    gap: 1.5rem;
    place-items: center;
    grid-template-columns: repeat(4, 1fr);

    @media only screen and (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 480px) {
      grid-template-columns: repeat(1, 1fr);
    }

    & > div {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      width: 100%;

      gap: 0.5rem;
      padding: 1rem;
      border: 1px solid #eae9ec;

      border-radius: 0.5rem;

      &:hover {
        box-shadow: 0px -5px 10px -5px rgb(0 0 0 / 36%);
      }
    }
  }
`;
