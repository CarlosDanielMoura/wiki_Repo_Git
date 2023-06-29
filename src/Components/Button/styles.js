import { styled } from "styled-components";

export const Container = styled.div`
  width: 50%;
`;

export const ButtonCustom = styled.button`
  width: 150px;
  border: none;
  border-radius: 12px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    transition: ease-in-out 0.4s;
    opacity: 0.6;
  }
`;
