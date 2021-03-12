import React from 'react'
import './search_error.css'

const NotFoundContainer = () => {
  return (
    <section className="wrapper">
      <div className="img-wrap">
        <div className="no_found-img"></div>
      </div>
      <h3 className="search-Title">검색결과가 없습니다.</h3>
      <p className="search-desc">다른 검색어를 시도해 주세요.</p>
    </section>
  )
}

export default NotFoundContainer
