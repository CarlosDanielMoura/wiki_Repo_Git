import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputCustom = styled.input`
  width: 80%;
  height: 20px;
  padding: 10px;
  border: none;
  border-radius: 12px;

  &::placeholder {
    color: black;
    font-size: 16px;
  }

  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;
