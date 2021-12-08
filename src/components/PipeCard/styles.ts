import styled from "styled-components";
import { lighten } from "polished";

interface BoxProps {
  color: string;
}

export const Box = styled.section<BoxProps>`
  width: 10rem;
  height: 12.2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s ease;
  background-color: ${(props) =>
    props.color ? lighten(0.4, props.color) : "white"};

  &:hover {
    color: #101820;
    box-shadow: 0 8px 10px #8f8f8f;
    transform: scale(1.05);
    background-color: ${(props) =>
      props.color ? lighten(0.2, props.color) : "white"};
  
    img {
      filter: invert(0.2);
    }
  }


`;

export const Content = styled.section`
  height: 100%;
  width: 90%;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const LockContainer = styled.div`
  height: 1.87rem;

  img {
    height: 1.25rem;
    margin: 0.19rem;
    filter: invert(0.5);
  }
`;
