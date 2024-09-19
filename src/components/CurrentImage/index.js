import './index.css'

const CurrentImage = props => {
  const {currentImageId, imagesList} = props
  const currentImge = imagesList.find(each => each.id === currentImageId)
  return (
    <div className="current-img-con">
      <img className="current-img" src={currentImge.imageUrl} alt="match" />
    </div>
  )
}
export default CurrentImage
