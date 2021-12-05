import styled from "styled-components";
import { lighten } from "polished";

interface BoxProps {
  color: string;
}

export const Box = styled.section<BoxProps>`
  width: 160px;
  height: 200px;
  border-radius: 8px;
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
  height: 30px;

  img {
    height: 20px;
    margin: 6px;
    filter: invert(0.5);
  }
`;
