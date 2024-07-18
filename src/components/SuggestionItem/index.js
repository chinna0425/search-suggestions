import './index.css'

const SuggestionItems = props => {
  const {items, filltheSearch} = props
  const {id, suggestion} = items

  const fillsearch = () => {
    filltheSearch(suggestion)
  }
  return (
    <li className="list-items">
      <p className="paragraph">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="searchlogo"
        onClick={fillsearch}
      />
    </li>
  )
}
export default SuggestionItems
