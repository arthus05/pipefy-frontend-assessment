import styled, { keyframes } from "styled-components";

const Rotate = keyframes`
  to {
    transform: rotate(360deg)
  }
`;

interface LoaderProps {
  size?: string
}

export const Loader = styled.div<LoaderProps>`
  animation: ${Rotate} 0.8s infinite;
  border: 0.2rem solid #8f8f8f;
  border-top-color: #fff;
  border-radius: 50%;
  height: ${props => props.size ?  props.size : '1.4rem'};
  width: ${props => props.size ?  props.size : '1.4rem'};
`;

export const Box = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
