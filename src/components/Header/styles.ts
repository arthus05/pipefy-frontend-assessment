import styled from "styled-components";

export const Box = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.section`
  height: 12vh;
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
  width: 94%;
  margin: auto;
  height: 56px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`