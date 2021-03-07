import React from 'react'
import './ui_style.css'

const ToolTip = (pros) => {
  return (
    <div className="tooltip-box">
      <span>{pros.msg}</span>
    </div>
  )
}

export default ToolTip
