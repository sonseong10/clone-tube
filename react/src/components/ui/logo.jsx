import React from 'react'
import styles from '../../assets/style/ui_style.module.css'

const Logo = ({ modes }) => {
  const modeType = modes === true ? styles.dark : styles.light
  return (
    <a href="/" className={`${styles.logo} ${modeType}`}>
      <h1>너튜브</h1>
    </a>
  )
}

export default Logo
