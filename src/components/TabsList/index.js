import './index.css'

const TabsList = props => {
  const {eachTabDetails, activeTab, active} = props
  const {tabId, displayText} = eachTabDetails
  const onActiveTabChange = () => {
    activeTab(tabId)
  }
  return (
    <li className="list">
      <button
        onClick={onActiveTabChange}
        className={`button ${active ? 'active-tab' : ''}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabsList
