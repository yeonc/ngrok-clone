# ngrok Clone coding

(작성 중인 문서입니다😊 2021.10.6~)

Original : https://ngrok.com

### 💻 To do list - 남은 작업들

- [x] Footer 스타일링 작업 (+반응형)
- [ ] Media query에 정의해 놓은 breakpoint와 실제 동작하는 breakpoint가 일치하지 않는 문제 해결
- [x] Header의 Dropdown menu 작업
- [x] Header의 gnb 메뉴 버튼 사용성 개선 - 클릭 타겟 범위 넓히기
- [x] Introduction section의 타이틀에 Type.js 라이브러리 적용
- [ ] 오른쪽 하단 Ask a question 버튼 작업

## 1) 구현 사항

### 1. Responsive Web - Breakpoints: 462px, 750px, 974px

### 2. 부분적으로 반응형 Grid 적용 - Testimonial section

### 3. 외부 Library 적용 (Typed.js)

## 2) 어려웠던 부분

- Navigation bar 안에 있는 메뉴들에 마우스를 올렸을 때 핑크색 밑줄이 나오는 걸 구현하는 과정에서 `<a>` 태그에 직접 `border-bottom` 속성을 주니 밑줄이 잘 나오기는 하나 클릭할 수 있는 타겟 영역이 좁아져 사용성이 나빠지는 문제가 있었다. 그래서 `<a>` 태그에 `padding` 값을 주니 클릭 가능한 타겟 영역은 넓어졌으나, 늘어난 영역만큼 `border-bottom`도 가로로 길어져서 내가 원하는 모습으로 구현이 되지 않는 것을 확인할 수 있었다. 내가 원하는 건 **타겟 영역이 넓어져도 타겟 영역에 마우스를 올릴 때는 메뉴 텍스트가 차지하는 가로 길이만큼만 밑줄이 나오는 것**이다. 전에 JavaScript를 공부할 때, 다른 요소를 클릭해도 내가 원하는 요소에 클릭 이벤트가 발생하게 할 수 있는 방법을 들었던 기억이 있다. `<a>` 태그 대신 `<a>` 태그를 감싸고 있는 `<li>` 태그에 padding 값을 주고 나서 JavaScript로 코드를 짜 봐야겠다. (`<li>` 요소를 클릭했을 때도 메뉴의 링크가 클릭이 된다면, `<a>` 태그에 직접 `border-bottom` 속성을 준다고 해도 클릭 가능한 타겟 영역이 넓어지는 효과를 줄 수 있는 것이 되므로 내가 원하는 사항을 구현할 수 있게 될 것이다.) 나중에 JavaScript 코드를 작성할 때 이 부분을 해결해 봐야겠다.

  - Navgation bar 메뉴 내부에 있는 `<a>` 태그 안에 `<span>` 태그를 추가해서 텍스트를 새로 추가한 `<span>` 태그로 감싸고 `<a>` 요소에 hover가 되었을 때, `<span>` 태그에 `border-bottom` 속성을 주는 방법으로 해결했다. `<a>` 태그에 `padding` 속성을 줌으로써 링크의 타겟 범위도 넓히면서(사용성 개선), 핑크색 밑줄은 메뉴 텍스트의 가로만큼만 나오도록 만들었다.

- 반응형 header의 dropdown 메뉴를 구현하면서 시간도 많이 잡아먹고 애를 먹었다. 하나의 내비게이션 메뉴를 숨기고 나타나게 하는 방식으로 구현해 보려고 하다가 실패해서 나중엔 dropdown을 위한 메뉴를 새로 하나 더 만들어서 그것만 숨기거나 보여지게 하는 방식으로 처리했다.

- 반응형 작업을 할 때는 작은 사이즈에서 큰 사이즈 혹은 큰 사이즈에서 작은 사이즈 이렇게 한 방향으로 처리해야지, 이리저리 정신없이 왔다갔다거리면서 작업을 하면 정말 많이 헷갈린다는 것을 몸소 깨달았다. 원래는 한 방향으로 작업해 왔는데, 상단바 dropdown 메뉴를 작업할 때 혼란이 왔는지 나도 모르게 이리저리 규칙 없이 왔다갔다 거리면서 작업을 했던 것 같다.

## 3) 구현하지 못한 사항

- Dropdown menu가 열릴 때 header가 같이 보이게 하는 것
  - position값을 주고 z-index을 아무리 조절해 봐도 header가 dropdown의 검정색 배경 앞으로 나오지 않아서 애를 먹었는데, 결국엔 구현하지 못했다.
  - 그래서 원래의 사이트와는 다르게 드롭다운 메뉴 오른쪽 상단에 close button을 넣어서 구현해 두었다.
- Dropdown menu & Widget form이 닫힐 때의 애니메이션
  - 열릴 때만 구현하고, 닫힐 때는 구현하지 못했다. (CSS, JavaScript로 다 시도해 보았으나 구현하기 어려웠다.)
- Media query breakpoint 불일치 문제
  - 해결하진 못했지만, 해결하려고 시도해 보았던 것들을 [노션](https://yeonc.notion.site/Media-query-breakpoint-a1b4cf7ebc824696b1ae2da0086c4d07)에 정리해 두었다.
