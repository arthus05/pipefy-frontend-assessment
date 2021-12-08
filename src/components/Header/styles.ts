import styled from "styled-components";

export const Box = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.section`
  height: 3.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);

  img {
    height: 40px;
    pointer-events: none;
  }
`;

export const Content = styled.section`
  width: 90%;
  margin: 1rem auto;
  height: 3.2rem;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

`