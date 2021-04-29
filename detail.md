## 1차 수정(2021.03.26 기준)

## DarkMode

기존 DarkMode는 새로고침`F5`나 로고를 클릭하는 경우 초기화가 되었습니다.지속적으로 DarkMode를 유지하는 방법을 찾아야 했고 LocalStorage 활용해서 유지 하기로 결정했습니다.

### Q. 왜 LocalStorage를 사용했는가?

먼저 해당 문제를 해결하기 위한 방법으로 Web Storage와 Cookie 이렇게 나눠집니다. 또 Web Storage는 Localstorage, Sessionstorage로 나눠집니다. 자세한 정보는 링크를 확인 해 주세요. [More](https://github.com/sonseong10/todostudy/blob/master/notebook/fe/cookie_session_localstorage.md)

DarkMode를 유지하기 위에서 필요한 부분은 `영구적으로 보관`이 가능해야 함으로 Localstorage을 활용 했습니다.

```js
const [dark, setDark] = useState(localStorage.getItem('darkMode') === 'true')

const handleModeChange = (event) => {
  onBodyChange()
  setDark(!dark)
  event.target.blur()
}

function onBodyChange() {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
}
```

## VideoList

현재 API를 통해 총 24개의 video를 받습니다. 사용자에게 더 많은 비디오를 보여 줘야 합니다.

### YouTube video 추가 방식

YouTube의 video 추가 방식은 infinite scroll을 사용합니다.

**Solution**

React에서 infinite scroll 구현 방법: [npm infinite-scroll](https://www.npmjs.com/package/react-infinite-scroll-component)

### CloneTube video 추가 방식

먼저, [Youtube API](https://developers.google.com/youtube/v3/docs/playlistItems/list?hl=ko) `nextPageToken`을 통해 다음 페이지 정보를 받아 올수 있습니다. 하지만 infinite scroll이나 다른 방식으로 계속 서버통신을 하는 경우 Youtube API 특성상 빠르게 `403 Error`를 받게 됩니다. 그렇다면, 리스트에 비디오를 어떻게 추가 해야 하는지 새로운 방식을 찾아야 했습니다.

제가 적용한 방식은 검색결과를 기존 videos 앞에 추가하는 것입니다.

```js
this.channels = []

response.data.items.map((item) => {
  const setResult = {
    ...item,
    etag: item.etag + this.setRendoum(),
    id: item.id.videoId,
    title: decode(item.snippet.title),
  }
  return this.channels.unshift(
    this.setChannelItem(setResult.snippet.channelId, setResult)
  )
})
```

[unshift MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

이렇게 VideoList에 마치 새 video가 계속 추가되는 현상 처럼 보일 수 있습니다.

> ⚠ Warning
> 이렇게 추가 된다면 unique key가 아닌 동일한 key가 발생합니다.

**Solution**

unique key만들기

```js
setRendoum = () => {
  return Math.random() * (1 - 100) + 24
}
```

랜덤숫자를 문자열에 추가하여 최대한 동일한 key를 방지했습니다.
다른 방식으로는 [npm uuid](https://www.npmjs.com/package/uuid)가 있습니다.

## 2차 수정(2021.04.20 기준)

HTML lang 번경되었습니다.

웹 접근성을 위해 메인페이지 영상 및 검색 결과가 한국 기준으로 제공하기 때문에
[w3bai](http://www.w3bai.com/ko/tags/ref_language_codes.html) 참고로 기존 kr → ko-KR로 변경되었습니다.

```html
<html lang="ko-KR"></html>
```

사이트 타이틀을 최상위 컴포넌트에서 관리합니다.

자식 컴포넌트에서 타이틀 상태를 가지고 관리하다 보니
검색 결과가 없는 경우 타이틀이 이전 영상 타이틀로 유지되는 이슈 가 있었습니다. 해결하기 위해 최상위 컴포넌트로 옮기고 이벤트 발생 시 상태를 내려주는 방식으로 좀 더 React스럽게 변경되었습니다.

App.jsx

```js
const [title, setTitle] = useState('CloneTube')
```

## 3차 수정(2021.04.29 기준)

DarkMode 상태 오류 수정

![darkmode-issu](https://user-images.githubusercontent.com/68719427/116504771-11db3f80-a8f4-11eb-9e68-d14225561ccd.png)

다크모드 상태에서 값이 false로 유지되던 버그를 true가 되도록 변경되었습니다.
