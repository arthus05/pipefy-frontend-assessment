import styled from "styled-components";

export const Box = styled.main`
  width: 94%;
  margin: 20px auto;
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  row-gap: 36px;
`

export const LoadingBox = styled.section`
  height: 70vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoPipes = styled.p`
  width: 100vw;
  text-align: center;
`
