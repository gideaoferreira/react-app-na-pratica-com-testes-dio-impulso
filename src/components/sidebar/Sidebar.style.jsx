/* eslint-disable no-mixed-operators */
import styled from 'styled-components';

export const Sidebar = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  position: fixed;
  padding: 10px 12px;
  transition: 0.6s;
  width: ${ props => props.toggle ? '75px' : '240px'};
`

export const ToggleButton = styled.button`
  color:  var(--bs-gray-600);
  background-color: white;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  min-width: 50px;
  padding 8px 6px;
  white-space: nowrap;

  &:hover {
    background-color: #f4f5f7;
  }
  & svg {
    width: ${props => props.toggle && "33px"};
  }
`

export const TextButton = styled.span`
  color: var(--bs-gray-600);
  margin-left: 5px;
  opacity: ${props => props.toggle ? "0" : "1"};
  pointer-events: ${props => props.toggle && "none"};
  transition: 0.8s;
`