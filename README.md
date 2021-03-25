# Clone Youtube Project

해당 프로젝트는 지식정보 제공자 [드림코딩 by 엘리 리액트 강의](https://www.youtube.com/watch?v=bJLfBq9npwQ)와 함께합니다.

## Tool Stack

<img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img alt="Postgres" src ="https://img.shields.io/badge/postcss-DD3A0A.svg?&style=for-the-badge&logo=postcss&logoColor=white"/> <img alt="Postman" src ="https://img.shields.io/badge/Postman-ff6c37.svg?&style=for-the-badge&logo=postman&logoColor=white"/> <img alt="Postman" src ="https://img.shields.io/badge/Yarn-2c8ebb.svg?&style=for-the-badge&logo=yarn&logoColor=white"/> <img alt="Netlify" src ="https://img.shields.io/badge/Netlify-00c7b7.svg?&style=for-the-badge&logo=netlify&logoColor=white"/>

### Why did you choose React?

![Web Frameworks](https://user-images.githubusercontent.com/68719427/112273428-b00a3300-8cc0-11eb-8d3e-3a8129c5dbfd.png)

사진출처: [stackoverflow](https://insights.stackoverflow.com/survey/2020/#technology)

2020년도 인기 있는 Web Frameworks로 React가 상위권에 있습니다. 왜 많은 개발자분이 React에 열광하는지 그 이유를 알고 싶어서 사용했습니다.

### Why did you choose Yarn?

yarn은 npm위에서 동작하는 패키지 매니저입니다. npm 보다 보안, 속도적인 면에서 yarn이 약간 더 우세하다.라는 의견이 있기 때문에 사용했습니다.

## Intro

<p align="center">
  바로가기: <a href="https://babam-clonetube.netlify.app/" style="text-align:center;">✨CloneTube✨</a>
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/68719427/112280022-e8613f80-8cc7-11eb-84f7-daad3d2e0cb9.png" alt="logo">
</p>

## 개선한 기능

Before: 계속 늘어나는 검색기록, 다크모드가 빠진 검색기록

![before](https://user-images.githubusercontent.com/68719427/112293694-bfe04200-8cd5-11eb-9300-631f97c2fe71.png)

After: width길이 제한, 다크모드 적용
![after](https://user-images.githubusercontent.com/68719427/112293257-4ba59e80-8cd5-11eb-9590-dc32963ac6ef.png)

## 추가한 기능

컨트롤러: 위로 이동 & 다크모드

![controller](https://user-images.githubusercontent.com/68719427/112291645-a4743780-8cd3-11eb-8dcf-611b51af3ea7.gif)

## 제작 중 힘들었던 부분

- API통신 제한: Youtube API는 하루 최대 서버 통신량이 정해져 있습니다. 테스트를 위해 여러 번 통신 요청을 보냈고 `403 Error`를 매일 경험했습니다.
- 변경사항 확인: React components 작업 후 결과 확인을 위해 서버 종료 후 다시 `yarn start`로 확인해야 했습니다.
  > ✅ 이번 프로젝트에 반영은 안 했지만 Google 검색을 통해 [react-refresh](https://www.npmjs.com/package/react-refresh), [react-hot-loader](https://www.npmjs.com/package/react-hot-loader) 등 즉각적인 변경 사항을 확인 할 수 있습니다.
- 변수 작명: CSS적용을 위한 class명, state 변수 등 유지보수를 위한 변수명 작성이 어려웠습니다.
  > ✅ 처음엔 BEM방법론으로 스타일을 적용하며 [Postcss](https://postcss.org/)로 해당하는 component에서만 스타일 적용이 가능하니 빠르게 작성 할 수 있었습니다.
- state 불변성: 평소 객체에서 pop(), push() 등 객체 자체를 변경하는 방식으로 해왔다면 React는 state 불변성을 유지해야 하기 때문에 map()과 같은 새로운 객체를 리턴하는 방식으로 변경했습니다.

## 이후 계획

### 크롬 개발자도구에 Lighthouse 결과

<p align="center">
  <img src="https://user-images.githubusercontent.com/68719427/112408877-e3e66680-8d5b-11eb-80d3-22e9204abe13.png" alt="logo">
</p>

- 성능개선: SPA의 특징인 첫 화면이 보이는 시간단축을 위한 [스켈레톤](https://ui.toast.com/weekly-pick/ko_20201110) 지원과 Youtube API로 받는 이미지 사이즈를 개선 할 방법을 찾을 예정입니다.
- PWA: 모바일 환경을 위한 [프로그레시브 웹 앱](https://developer.mozilla.org/ko/docs/Web/Progressive_web_apps) 지원 예정입니다.
