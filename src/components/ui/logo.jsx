import React from 'react'
import styles from '../../assets/style/ui_style.module.css'

const Logo = ({ modes }) => {
  const modeType = modes === true ? styles.light : styles.dark
  return (
    <a href="/">
      <span className={`${styles.logo} ${modeType}`}></span>
      <strong className={styles.screenOut}>CloneTube</strong>
    </a>
  )
}

export default Logo
