import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid rgb(179,131,226);
  color: white;
  background: rgb(179,131,226);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (min-width: 768px) {
    width: auto;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: rgb(140,125,240);
    border-color: rgb(195,131,226);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
 `;