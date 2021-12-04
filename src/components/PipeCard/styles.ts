import styled from "styled-components";

interface BoxProps {
  color: string
}

export const Box = styled.section<BoxProps>`
  width: 200px;
  height: 300px;
  background-color: ${props => props.color ? props.color : 'white'};
`