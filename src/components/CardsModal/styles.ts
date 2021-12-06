import styled from "styled-components";

export const Box = styled.section`
  display: none;
`

export const InsideBox = styled.section`
  width: max-content;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CardsBox = styled.div`
  max-width: 60vw;
  margin: .4rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`