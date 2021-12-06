import styled from "styled-components";

export const Box = styled.section`
  height: max-content;
  max-width: 40rem;
  margin: 1rem;
  background-color: #fff;
  padding: 1.6rem;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 3px 5px 10px 4px #cfcfcf;
  }
`;

export const CardData = styled.data`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1rem;
    margin-top: 0.4rem;
  }
`;

export const SubtitleContainer = styled.section`
  width: 100%;
  margin: 0.6rem 0;

  h3 {
    color: var(--text-body);
    text-transform: uppercase;
    font-size: 0.75rem;
  }

  p {
    color: var(--text-title);
    font-size: 0.84rem;
  }
`;

interface LabelProps {
  color: string;
}

export const Label = styled.label<LabelProps>`
  padding: 0.16rem 0.5rem;
  border-radius: 0.8rem;
  background-color: ${(props) => (props.color ? props.color : "")};
  cursor: pointer;

  color: #fff;
  font-weight: bold;
  font-size: 0.75rem;
`;

export const LabelBox = styled.section``;
