import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 60%;
  margin-top: 16px;
  gap: 20px;

  hr {
    margin-top: 20px;
    width: 100%;
  }
`;

export const SearchRepos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
