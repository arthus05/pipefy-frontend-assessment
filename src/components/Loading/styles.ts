import styled, { keyframes } from "styled-components";

const Bounce = keyframes`
  to {
    width: 16px
    height: 16px;
    transform: translate3d(0, -16px, 0)
  }
`;

export const Box = styled.div`
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader > span {
    display: inline-block;
    background-color: #000;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin: 0 8px;
    transform: translate3d(0);
    animation: ${Bounce} infinite alternate;
  }

  .loader > span:nth-child(2) {
    background-color: #f3f3;
    animation-delay: 0.2s;
  }

  .loader > span:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
