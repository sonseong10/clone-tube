import React, { memo, useRef, useState } from 'react'
import Logo from '../ui/logo'
import styles from '../../assets/style/header.module.css'

const HeaderGnb = memo(({ onSearch, modes }) => {
  const [historyItems, setHistoryItems] = useState([])
  const [mobileBtn, setmobileBtn] = useState(styles.close)
  const inputRef = useRef()

  const modeType = modes === true ? styles.light : styles.dark

  const handleMobileICon = (event) => {
    event.target.blur()
    inputRef.current.focus()
    setmobileBtn(mobileBtn === styles.close ? styles.open : styles.close)
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
      <Logo modes={modes} />
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
        <input
          type="submit"
          value=""
          className={styles.submitBtn}
          aria-label="검색어 제출"
        />
        <span className={styles.screenOut}>검색</span>
      </form>
      <nav>
        <ul className={styles.toolList}>
          <li className={styles.toolItem}>
            <button
              type="button"
              className={`${styles.moblieBtn} ${styles.toolBtn} ${styles.search}`}
              onClick={handleMobileICon}
              aria-label="검색 활성화"
            >
              <span className={styles.screenOut} aria-hidden="true">
                검색 활성화
              </span>
            </button>
            <div className={styles.tooltipBox}>
              <span>검색</span>
            </div>
          </li>
          <li className={styles.toolItem}>
            <button
              type="button"
              className={`${styles.toolBtn} ${styles.alarm}`}
              aria-label="알림 메시지"
            >
              <span className={styles.screenOut} aria-hidden="true">
                알림 메시지
              </span>
            </button>
            <div className={styles.tooltipBox}>
              <span>알림</span>
            </div>
          </li>
          <li className={styles.toolItem}>
            <button
              type="button"
              className={`${styles.toolBtn} ${styles.mirror}`}
              aria-label="화면 미러링"
            >
              <span className={styles.screenOut} aria-hidden="true">
                화면 미러링
              </span>
            </button>
            <div className={styles.tooltipBox}>
              <span>미러링</span>
            </div>
          </li>
          <li className={styles.toolItem}>
            <button
              type="button"
              className={`${styles.toolBtn} ${styles.user}`}
              aria-label="사용자 정보"
            >
              <span className={styles.screenOut} aria-hidden="true">
                사용자 정보 보기
              </span>
            </button>
            <div className={styles.tooltipBox}>
              <span>사용자</span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
})

export default HeaderGnb
