import styled from 'styled-components';

export const Menu = styled.div`
  /* border: 1px solid; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`
export const MenuLogo = styled.div`
  /* background-image: linear-gradient(-60deg, red,  blue); */
  background-image: linear-gradient(90deg, rgba(40,73,45,1) 0%, rgba(80,175,53,1) 50%, rgba(7,218,65,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bolder;
  font-size: 2em;
  list-style-type: none;
  margin: 5px 10px 0px 0px;
  padding: 0;
  text-align: center;
`;

export const UL = styled.ul`
  list-style-type: none;
  margin: 15px 0px 0px 0px;
  padding: 0;
  .menu-link .active {
    background-color: #50af35;
    color: white;
  }
`;

export const LI = styled.li`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: ${props => props.toggle && "center"};
  margin: 10px 0px;

  & a {
    color: var(--bs-gray-600);
    border-radius: 4px;
    padding: 8px 10px;
    text-decoration: none;
    width: 100%;
    white-space: nowrap;

    &:hover {
      color: #50af35;
    }

    & svg {
      width: ${props => props.toggle && "30px"};
    }
  }
`;

export const TextLink = styled.span`
  margin-left: 12px;
  opacity: ${props => props.toggle && "0"};
  pointer-events: ${props => props.toggle && "none"};
  transition: ${props => props.toggle && "0.5s"};
`
