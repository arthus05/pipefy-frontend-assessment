import styled from "styled-components";

export const Box = styled.section`
  display: none;
`

export const InsideBox = styled.section`
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CardsBox = styled.div`
  max-width: 60vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`