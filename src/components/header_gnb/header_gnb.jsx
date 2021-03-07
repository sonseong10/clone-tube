import React from 'react'
import Logo from '../ui/logo'
import ToolTip from '../ui/tooltip'
import './header.css'

const HeaderGnb = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <header className="header-gnb">
      <Logo />
      <form onSubmit={handleSubmit}>
        <input type="text" name="videoSearch" placeholder="검색" />

        <input type="submit" value="" />
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
            <span className="screen-out">검색</span>
          </li>
          <li className="tool-item">
            <button type="button" id="alarm" className="tool-btn "></button>
            <ToolTip msg="알림" />
            <span className="screen-out">알림</span>
          </li>
          <li className="tool-item">
            <button type="button" id="mirror" className="tool-btn "></button>
            <ToolTip msg="미러링" />
            <span className="screen-out">미러링</span>
          </li>
          <li className="tool-item">
            <button type="button" id="user" className="tool-btn "></button>
            <ToolTip msg="사용자" />
            <span className="screen-out">사용자</span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderGnb
