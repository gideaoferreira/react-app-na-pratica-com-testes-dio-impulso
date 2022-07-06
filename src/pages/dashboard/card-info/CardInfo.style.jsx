import styled from 'styled-components';

export const Content = styled.div`
  display: flex;

  & svg {
    background-color: ${props => props.bgIcon};
    border-radius: 50%;
    color: ${props => props.iconColor};
    height: 35px;
    padding: 18px;
    width: 35px;
  }
`

export const Text = styled.p`
  display: block;
  font-size: 25px;
  font-weight: bolder;
  margin: 0px 30px;
`

export const Span = styled.span`
  color: gray;
  display: block;
  font-size: 12px;
  font-weight: normal;
`