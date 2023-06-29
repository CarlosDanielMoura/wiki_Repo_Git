import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  p {
    font-size: 18px;
    text-align: justify;
  }
`;

export const ContainerIcon = styled.div`
  width: 100%;

  a {
    text-decoration: none;
  }

  a:nth-child(1) {
    color: lightslategray;
  }
  a:nth-child(2) {
    color: red;
  }

  svg {
    font-size: 35px;
    transform: scale(1);
    transition: ease-in 0.4s;
  }

  & svg:hover {
    transform: scale(1.3);
    transition: ease-in-out 0.4s;
    margin: 4px;
  }
`;
