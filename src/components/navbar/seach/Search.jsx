import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import * as UI from './Search.style';

export const Search: React.FC = () => {

  const dataResults = [
    {item: 'aqio', id: 1},
    {item: 'asssqio', id: 1}
  ]

  const [isLoading, setIsloading] = useState(false)
  const [results, setResults] = useState([{}])
  const [term, setTerm] = useState('')
  const [toggleResult, setToggleResult] = useState(false)

  const hasResult: boolean = () => {
    return !!results.length
  }

  const handleClick = () => {
    setResults([{}])
    setToggleResult(true)
    setIsloading(true)
    console.log(term)
    setTimeout(() => {
      setIsloading(false)
      setResults(dataResults)
    }, 3000)
  }

  return (
    <UI.Search>
      <UI.SearchContent>
        <UI.SearchButton disabled={isLoading} onClick={() => handleClick()}>
          <FontAwesomeIcon icon={['fas', 'fa-search']} size="1x" />
        </UI.SearchButton>
        <UI.SearchInput  disabled={isLoading} onChange={({ target }) => setTerm(target.value)} />
        
      </UI.SearchContent>
      <UI.SearchResult toggle={toggleResult}>
        { isLoading && <Spinner animation="border" variant="success" /> }
        { hasResult && results.map((result, index) => {
          return (
            <h6 key={index}>
              <small> {result.item} </small>
            </h6>
          )
        })}
      </UI.SearchResult>
    </UI.Search>
  )
}