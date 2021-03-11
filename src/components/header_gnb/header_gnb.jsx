import React, { useRef, useState } from 'react'
import Logo from '../ui/logo'
import ToolTip from '../ui/tooltip'
import './header.css'

const HeaderGnb = ({ onSearch }) => {
  const [historyItems, setHistoryItems] = useState([])
  const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const inputValue = inputRef.current.value
    if (inputValue !== '') {
      inputRef.current.blur()
      onSearch(inputValue)
      historyUpdate(inputValue)
    }
  }

  const historyUpdate = (inputValue) => {
    if (historyItems.includes(inputValue)) {
      return false
    } else {
      const addHistory = [inputValue, ...historyItems]
      setHistoryItems(addHistory)
    }
  }

  const historySerch = (event) => {
    const historyValue = event.target.value
    onSearch(historyValue)
  }

  return (
    <header className="header-gnb">
      <Logo />
      <form onSubmit={handleSubmit} className="gnb-form">
        <input
          type="text"
          name="videoSearch"
          autoComplete="off"
          placeholder="검색"
          className="video-search-input"
          ref={inputRef}
        />
        <ul className="search-history">
          {historyItems.map((item) => {
            return (
              <li key={new Date().getTime() + Math.random()}>
                <button
                  type="button"
                  className="history-item"
                  value={item}
                  onClick={historySerch}
                >
                  {item}
                </button>
              </li>
            )
          })}
        </ul>
        <input type="submit" value="" className="video-search-btn" />
        <span className="screen-out">검색</span>
      </form>
      <nav className="gnb">
        <ul className="gnb-tool-list">
          <li className="tool-item">
            <button
              type="button"
              id="search"
              className="moblie-btn tool-btn"
            ></button>
            <ToolTip msg="검색" />
          </li>
          <li className="tool-item">
            <button type="button" id="alarm" className="tool-btn "></button>
            <ToolTip msg="알림" />
          </li>
          <li className="tool-item">
            <button type="button" id="mirror" className="tool-btn "></button>
            <ToolTip msg="미러링" />
          </li>
          <li className="tool-item">
            <button type="button" id="user" className="tool-btn "></button>
            <ToolTip msg="사용자" />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderGnb
