import styled from "styled-components";

export const Box = styled.section`
  display: none;
`;

export const InsideBox = styled.section`
  width: max-content;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface CardsBoxProps {
  numColumns?: number;
}

export const CardsBox = styled.div<CardsBoxProps>`
  max-width: 60vw;
  margin: 0.4rem 0;
  display: grid;
  grid-template-columns: repeat(
    ${props => props.numColumns ?  props.numColumns : 3}, 1fr
  );
`;
