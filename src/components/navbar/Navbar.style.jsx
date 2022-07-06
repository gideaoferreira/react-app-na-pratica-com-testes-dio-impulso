import styled from 'styled-components';

export const Navbar = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  height: 55px;
  justify-content: space-between;
  margin-left: ${ props => props.toggle ? '85px' : '250px'};
  padding: 5px 10px;
  position: absolute;
  transition 1s;
  width: ${ props => props.toggle ? 'calc(100% - 91px)' : 'calc(100% - 250px)'};
`

export const NavBarSearch = styled.div`
  display: flex;
`

export const NavBarMenu = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 150px;
` 