import React, { useState } from 'react'
import './ui_style.css'
import ToolTip from './tooltip'

const Controller = () => {
  const [showIcon, setShowIcon] = useState('hide')
  const [activeIcon, setactiveIcon] = useState('unactive')
  const hadletoggleBtn = () => {
    setShowIcon(showIcon === 'hide' ? 'show' : 'hide')
  }

  const handlemodeChange = () => {
    document.body.classList.toggle('dark')
    setactiveIcon(activeIcon === 'unactive' ? 'active' : 'unactive')
  }

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="snb">
      <button
        id="darkmode"
        className={`control-btn ${showIcon} ${activeIcon}`}
        onClick={handlemodeChange}
      ></button>
      <ToolTip msg="다크모드" />
      <button
        id="top"
        className={`control-btn ${showIcon}`}
        onClick={handleTop}
      ></button>
      <ToolTip msg="위로" />
      <button
        id="control"
        className="control-btn"
        onClick={hadletoggleBtn}
      ></button>
      <ToolTip msg="설정" />
    </nav>
  )
}

export default Controller
