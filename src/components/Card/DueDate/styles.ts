import styled from "styled-components";

export const Box = styled.section`
  font-size: 0.9rem;
`;

export const DueDateLabel = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 0.8rem;
  white-space: nowrap;

  label {
    color: #fff;
    background-color: #6D7C87;
    padding: 0.2rem 0.5rem;
    border-radius: 0.7rem;
    cursor: pointer;
  }
`;

export const DueDateLabelYear = styled.p`
  margin-left: .4rem;
  color: var(--text-title);
`;
