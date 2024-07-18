import {Component} from 'react'
import SuggestionItems from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchele: ''}

  searchitems = event => {
    this.setState({searchele: event.target.value})
  }

  filltheSearch = suggestion => {
    this.setState({searchele: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchele} = this.state
    const updatedlist = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchele.toLowerCase()),
    )
    return (
      <div className="background-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="googlelogo"
        />
        <div className="inner-container">
          <div className="search-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="searchlogo"
            />
            <input
              type="search"
              className="inputsearch"
              placeholder="Search Google"
              onChange={this.searchitems}
              value={searchele}
            />
          </div>
          <ul className="element-list">
            {updatedlist.map(each => (
              <SuggestionItems
                items={each}
                key={each.id}
                filltheSearch={this.filltheSearch}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
