import React, { useState } from 'react'
import styles from '../../assets/style/ui_style.module.css'

const Controller = ({ modes, onModeChange, activeIcon }) => {
  const [showIcon, setShowIcon] = useState(styles.hide)
  const modeType = modes === 'light' ? styles.light : styles.dark
  const activeType = activeIcon === 'active' ? styles.active : 'inactive'

  const hadletoggleBtn = () => {
    setShowIcon(showIcon === styles.hide ? styles.show : styles.hide)
  }

  const handleMoveTop = () => {
    window.scrollTo({ top: 0 })
    hadletoggleBtn()
  }

  return (
    <nav className={`${styles.snb} ${modeType}`}>
      <button
        className={`${styles.controlBtn} ${styles.darkmode} ${showIcon} ${activeType}`}
        onClick={onModeChange}
        onBlur={hadletoggleBtn}
        aria-label="다크모드 변경"
      >
        <span class={styles.screenOut} aria-hidden="true">
          다크모드 변경
        </span>
      </button>
      <div className={styles.tooltipBox}>
        <span>다크모드</span>
      </div>
      <button
        className={`${styles.controlBtn} ${styles.top} ${showIcon}`}
        onClick={handleMoveTop}
        aria-label="위로 이동"
      >
        <span class={styles.screenOut} aria-hidden="true">
          위로 이동
        </span>
      </button>
      <div className={styles.tooltipBox}>
        <span>위로</span>
      </div>
      <button
        className={`${styles.controlBtn} ${styles.control}`}
        onClick={hadletoggleBtn}
        aria-label="설정 열기"
      >
        <span class={styles.screenOut} aria-hidden="true">
          설정 열기
        </span>
      </button>
      <div className={styles.tooltipBox}>
        <span>설정</span>
      </div>
    </nav>
  )
}

export default Controller
