import React from 'react'
import styles from '../../assets/style/search_error.module.css'

const NotFoundContainer = ({ modes }) => {
  const modeType = modes === 'light' ? styles.light : styles.dark
  return (
    <section className={`${styles.wrapper} ${modeType}`}>
      <div className={styles.imgContainer}>
        <div className={styles.img}></div>
      </div>
      <h3 className={styles.title}>검색결과가 없습니다.</h3>
      <p className={styles.desc}>다른 검색어를 시도해 주세요.</p>
    </section>
  )
}

export default NotFoundContainer
