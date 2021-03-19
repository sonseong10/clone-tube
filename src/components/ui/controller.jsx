import React, { useState } from 'react'
import './ui_style.css'
import ToolTip from './tooltip'

const Controller = ({ modes, onModeChange, activeIcon }) => {
  const [showIcon, setShowIcon] = useState('hide')

  const hadletoggleBtn = () => {
    setShowIcon(showIcon === 'hide' ? 'show' : 'hide')
  }

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className={`snb ${modes}`}>
      <button
        id="darkmode"
        className={`control-btn ${showIcon} ${activeIcon}`}
        onClick={onModeChange}
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
