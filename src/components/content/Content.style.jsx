import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 63px;
  width: ${ props => props.toggle ? 'calc(100% - 91px)' : 'calc(100% - 254px)'};
  padding: 10px;
  position: absolute;
  left: ${ props => props.toggle ? '85px' : '250px'};
  transition: 1s;
`