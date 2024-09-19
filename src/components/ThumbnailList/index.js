import './index.css'

const ThumbnailList = props => {
  const {eachTumbnailDetails, clickThumbnail} = props
  const {id, thumbnailUrl} = eachTumbnailDetails
  const onClickThumbnail = () => {
    clickThumbnail(id)
  }
  return (
    <li className="thumbnail-list">
      <button
        type="button"
        onClick={onClickThumbnail}
        className="list-img-button"
      >
        <img className="imgs" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}
export default ThumbnailList
