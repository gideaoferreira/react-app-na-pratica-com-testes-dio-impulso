import styled from "styled-components";

export const Dropdown = styled.div`
  margin: 2px 3px;

  & .btn:focus {
    color: var(--bs-gray-600);
    background-color: white;
    box-shadow: none;
  }

  & button {
    background-color: white;
    border: none;
    color: var(--bs-gray-500);

    &::after{
      display: none;
    }

    &:hover {
      color: var(--bs-gray-600);
      background-color: white !important;
    }
  }
`