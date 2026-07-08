import './index.css'

const CountryItem = props => {
  const {details, clickVisit} = props
  const {id, name, imageUrl, isVisited} = details
  const onClickVisit = () => {
    clickVisit(id)
  }
  return (
    <li className="country-item-container">
      <p className="item-name">{name}</p>
      {isVisited ? (
        <p className="item-visited">Visited</p>
      ) : (
        <button className="item-button" type="button" onClick={onClickVisit}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryItem
