import './index.css'

const VisitedCountry = props => {
  const {details, clickRemove} = props
  const {id, name, imageUrl, isVisited} = details
  const onClickRemove = () => {
    clickRemove(id)
  }
  return (
    <li className="visited-countries-container">
      <img src={imageUrl} alt="thumbnail" className="visited-img" />
      <div className="visited-text">
        <p className="visited-name">{name}</p>
        <button className="visited-btn" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountry
