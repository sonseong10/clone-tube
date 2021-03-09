import React, { useRef, useState } from 'react'
import Logo from '../ui/logo'
import ToolTip from '../ui/tooltip'
import './header.css'

const HeaderGnb = ({ onSearch }) => {
  const [historyItems, setHistoryItems] = useState([])
  const inputRef = useRef()

  const handleSubmit = (event) => {
    if (event.target.tagName === 'BUTTON') {
      onSearch(event.target.innerText)
    } else {
      const value = inputRef.current.value
      event.preventDefault()
      if (value) {
        inputRef.current.value = ''
        inputRef.current.blur()
        historyUpdate(value)
        onSearch(value)
      }
    }
  }

  const historyUpdate = (value) => {
    if (historyItems.includes(value)) {
      return
    } else {
      const addValue = [value, ...historyItems]
      setHistoryItems(addValue)
    }
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
                <button className="history-item" onClick={handleSubmit}>
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
