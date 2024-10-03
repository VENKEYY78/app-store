// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTabDetails, onClickTabItem, isActive} = props
  const {displayText, tabId} = eachTabDetails

  const onClickTab = () => {
    onClickTabItem(tabId)
  }

  const ActiveTab = isActive ? 'active' : ''

  return (
    <li className="tab-Item-container">
      <button
        type="button"
        className={`tab-btn ${ActiveTab}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
