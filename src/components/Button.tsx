import styled from "styled-components";

export default styled.button`
  color: white;
  cursor: pointer;
  font-size: 15px;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: #1e9889;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #1e9889;
  }
`;
