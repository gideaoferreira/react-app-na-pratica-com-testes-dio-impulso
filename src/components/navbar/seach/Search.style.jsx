import styled from 'styled-components';

export const Search = styled.div`
  width: 460px;
`

export const SearchContent = styled.div`
  display: flex;
`

export const SearchButton = styled.button`
  background-color: var(--bs-gray-200);
  border: none;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  color: var(--bs-gray);
  padding: 8px;
  width: 50px;
`

export const SearchInput = styled.input`
  border: none;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom: var(--bs-gray-200) 1px solid;
  border-top: var(--bs-gray-200) 1px solid;
  border-right: var(--bs-gray-200) 1px solid;
  color: var(--bs-gray-700);
  padding: 3px 5px;
  width: 400px;

  &:focus {
    outline: none;
  }
`

export const SearchResult = styled.div`
  background-color: var(--bs-gray-200);
  border-radius: 5px;
  display: ${ props => props.toggle ? 'block' : 'none'};
  padding: 10px 8px;
  position: absolute;
  top: 50px;
  min-height: 50px;
  width: 450px;
  z-index: 9999;
`