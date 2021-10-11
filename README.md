# ngrok Clone coding

(작성 중인 문서입니다😊 2021.10.6~)

Original : https://ngrok.com

### 💻 To do list - 남은 작업들

- [x] Footer 스타일링 작업 (+반응형)
- [ ] Media query에 정의해 놓은 breakpoint와 실제 동작하는 breakpoint가 일치하지 않는 문제 해결
- [ ] Header의 Dropdown menu 작업
- [ ] Header의 gnb 메뉴 버튼 사용성 개선 - 클릭 타겟 범위 넓히기
- [x] Introduction section의 타이틀에 Type.js 라이브러리 적용
- [ ] 오른쪽 하단 Ask a question 버튼 작업

## 1) 구현 사항

### 1. Responsive Web - Breakpoints: 462px, 750px, 974px

### 2. 부분적으로 반응형 Grid 적용 - Testimonial section

## 2) 어려웠던 부분

- Navigation bar 안에 있는 메뉴들에 마우스를 올렸을 때 핑크색 밑줄이 나오는 걸 구현하는 과정에서 `<a>` 태그에 직접 `border-bottom` 속성을 주니 밑줄이 잘 나오기는 하나 클릭할 수 있는 타겟 영역이 좁아져 사용성이 나빠지는 문제가 있었다. 그래서 `<a>` 태그에 `padding` 값을 주니 클릭 가능한 타겟 영역은 넓어졌으나, 늘어난 영역만큼 `border-bottom`도 가로로 길어져서 내가 원하는 모습으로 구현이 되지 않는 것을 확인할 수 있었다. 내가 원하는 건 **타겟 영역이 넓어져도 타겟 영역에 마우스를 올릴 때는 메뉴 텍스트가 차지하는 가로 길이만큼만 밑줄이 나오는 것**이다. 전에 JavaScript를 공부할 때, 다른 요소를 클릭해도 내가 원하는 요소에 클릭 이벤트가 발생하게 할 수 있는 방법을 들었던 기억이 있다. `<a>` 태그 대신 `<a>` 태그를 감싸고 있는 `<li>` 태그에 padding 값을 주고 나서 JavaScript로 코드를 짜 봐야겠다. (`<li>` 요소를 클릭했을 때도 메뉴의 링크가 클릭이 된다면, `<a>` 태그에 직접 `border-bottom` 속성을 준다고 해도 클릭 가능한 타겟 영역이 넓어지는 효과를 줄 수 있는 것이 되므로 내가 원하는 사항을 구현할 수 있게 될 것이다.) 나중에 JavaScript 코드를 작성할 때 이 부분을 해결해 봐야겠다.
