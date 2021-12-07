import styled from "styled-components";
import { darken } from "polished";

export const LoadMoreBtn = styled.button`
  margin-top: 1rem;
  margin-bottom: 1.6rem;
  width: 7rem;
  height: 2.6rem;
  border-radius: 1.6rem;
  border: none;
  background-color: #0b66ff;
  transition: 0.3s ease;

  color: #ffffff;
  font-size: 1rem;

  &:hover {
    background-color: ${darken(0.24, "#0B66FF")};
  }
`;
