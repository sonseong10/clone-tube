import React, { memo, useRef, useState } from 'react'
import Logo from '../ui/logo'
import ToolTip from '../ui/tooltip'
import styles from './header.module.css'

const HeaderGnb = memo(({ onSearch, modes }) => {
  const [historyItems, setHistoryItems] = useState([])
  const [mobileBtn, setmobileBtn] = useState('close')
  const inputRef = useRef()

  const modeType = modes === 'light' ? styles.light : styles.dark

  const handleMobileICon = (event) => {
    event.target.blur()
    inputRef.current.focus()
    setmobileBtn(mobileBtn === 'close' ? 'open' : 'close')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const inputValue = inputRef.current.value
    if (inputValue !== '') {
      inputRef.current.blur()
      onSearch(inputValue)
      historyUpdate(inputValue)
    } else {
      inputRef.current.focus()
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
    <header className={`${styles.gnb} ${modeType}`}>
      <Logo modes={modeType} />
      <form onSubmit={handleSubmit} className={`${styles.form} ${mobileBtn}`}>
        <input
          type="text"
          name="videoSearch"
          autoComplete="off"
          placeholder="검색"
          className={styles.searchInput}
          ref={inputRef}
        />
        <ul className={styles.history}>
          {historyItems.map((item) => {
            return (
              <li key={new Date().getTime() + Math.random()}>
                <button
                  type="button"
                  className={styles.historyItem}
                  value={item}
                  onClick={historySerch}
                >
                  {item}
                </button>
              </li>
            )
          })}
        </ul>
        <input type="submit" value="" className={styles.submitBtn} />
        <span className={styles.screenOut}>검색</span>
      </form>
      <nav>
        <ul className={styles.toolList}>
          <li className={styles.toolItem}>
            <button
              type="button"
              className={`${styles.moblieBtn} ${styles.toolBtn} ${styles.search}`}
              onClick={handleMobileICon}
            ></button>
            <ToolTip msg="검색" />
          </li>
          <li className={styles.toolItem}>
            <button
              type="button"
              className={`${styles.toolBtn} ${styles.alarm}`}
            ></button>
            <ToolTip msg="알림" />
          </li>
          <li className={styles.toolItem}>
            <button
              type="button"
              className={`${styles.toolBtn} ${styles.mirror}`}
            ></button>
            <ToolTip msg="미러링" />
          </li>
          <li className={styles.toolItem}>
            <button
              type="button"
              className={`${styles.toolBtn} ${styles.user}`}
            ></button>
            <ToolTip msg="사용자" />
          </li>
        </ul>
      </nav>
    </header>
  )
})

export default HeaderGnb
