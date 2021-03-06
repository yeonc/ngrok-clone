# ngrok Clone coding

ngrok의 메인 페이지 clone coding  
(Original: https://ngrok.com)

→ 작업 기간: 2021.10.6~21

<details>
  <summary>💻 To do list - 남은 작업들 (完)</summary>

- [x] Footer 스타일링 작업 (+반응형)
- [ ] ~~Media query에 정의해 놓은 breakpoint와 실제 동작하는 breakpoint가 일치하지 않는 문제 해결~~ -> [4) 구현하지 못한 사항](https://github.com/yeonc/ngrok-clone#3-%EA%B5%AC%ED%98%84%ED%95%98%EC%A7%80-%EB%AA%BB%ED%95%9C-%EC%82%AC%ED%95%AD)으로 이동
- [x] Header의 Dropdown menu 작업
- [x] Header의 gnb 메뉴 버튼 사용성 개선 - 클릭 타겟 범위 넓히기
- [x] Introduction section의 타이틀에 Type.js 라이브러리 적용
- [x] 오른쪽 하단 Ask a question 버튼 작업

</details>
<br/>

<img width="600" alt="ngrok-clone" src="https://user-images.githubusercontent.com/91853870/148640114-2d3cd7c6-aa1d-4bb0-bcf5-4554ba841276.gif">

## 1) 사용 기술

- HTML
- CSS
- JavaScript

## 2) 구현 사항

1. Responsive Web (Breakpoints - 462px, 750px, 974px)
2. 부분적으로 반응형 Grid 적용: Testimonial section
3. 외부 Library 적용 (Typed.js)
4. Validation check: 'Ask a question' Form

## 3) 어려웠던 부분

- Navigation bar 안에 있는 메뉴들에 마우스를 올렸을 때 핑크색 밑줄이 나오는 걸 구현하는 과정에서 `<a>` 태그에 직접 `border-bottom` 속성을 주니 밑줄이 잘 나오기는 하나 클릭할 수 있는 타겟 영역이 좁아져 사용성이 나빠지는 문제가 있었다. 그래서 `<a>` 태그에 `padding` 값을 주니 클릭 가능한 타겟 영역은 넓어졌으나, 늘어난 영역만큼 `border-bottom`도 가로로 길어져서 내가 원하는 모습으로 구현이 되지 않는 것을 확인할 수 있었다. 내가 원하는 건 **타겟 영역이 넓어져도 타겟 영역에 마우스를 올릴 때는 메뉴 텍스트가 차지하는 가로 길이만큼만 밑줄이 나오는 것**이다. 전에 JavaScript를 공부할 때, 다른 요소를 클릭해도 내가 원하는 요소에 클릭 이벤트가 발생하게 할 수 있는 방법을 들었던 기억이 있다. `<a>` 태그 대신 `<a>` 태그를 감싸고 있는 `<li>` 태그에 padding 값을 주고 나서 JavaScript로 코드를 짜 봐야겠다. (`<li>` 요소를 클릭했을 때도 메뉴의 링크가 클릭이 된다면, `<a>` 태그에 직접 `border-bottom` 속성을 준다고 해도 클릭 가능한 타겟 영역이 넓어지는 효과를 줄 수 있는 것이 되므로 내가 원하는 사항을 구현할 수 있게 될 것이다.) 나중에 JavaScript 코드를 작성할 때 이 부분을 해결해 봐야겠다.

  - Navgation bar 메뉴 내부에 있는 `<a>` 태그 안에 `<span>` 태그를 추가해서 텍스트를 새로 추가한 `<span>` 태그로 감싸고 `<a>` 요소에 hover가 되었을 때, `<span>` 태그에 `border-bottom` 속성을 주는 방법으로 해결했다. `<a>` 태그에 `padding` 속성을 줌으로써 링크의 타겟 범위도 넓히면서(사용성 개선), 핑크색 밑줄은 메뉴 텍스트의 가로만큼만 나오도록 만들었다.

- 반응형 header의 dropdown 메뉴를 구현하면서 시간도 많이 잡아먹고 애를 먹었다. 하나의 내비게이션 메뉴를 숨기고 나타나게 하는 방식으로 구현해 보려고 하다가 실패해서 나중엔 dropdown을 위한 메뉴를 새로 하나 더 만들어서 그것만 숨기거나 보여지게 하는 방식으로 처리했다.

- 반응형 작업을 할 때는 작은 사이즈에서 큰 사이즈 혹은 큰 사이즈에서 작은 사이즈 이렇게 한 방향으로 처리해야지, 이리저리 정신없이 왔다갔다거리면서 작업을 하면 정말 많이 헷갈린다는 것을 몸소 깨달았다. 원래는 한 방향으로 작업해 왔는데, 상단바 dropdown 메뉴를 작업할 때 혼란이 왔는지 나도 모르게 이리저리 규칙 없이 왔다갔다거리면서 작업을 했던 것 같다.

- Mobile size에서 widget form이 button을 가리는 현상이 있어서 form과 button의 위치를 재조정했는데, 그 과정에서 좀 어려움을 겪었다. 간단하게 해결할 수 있을 줄 알았는데 쉽지가 않았다. 결국 해결하긴 했지만 먼 길로 돌아 돌아 도착한 느낌이 든다. 그래도 고군분투하는 과정에서 좀 더 성장했다고 생각하니 뿌듯하다. [🔗해결 과정](https://yeonc.notion.site/Widget-button-form-85fb794352774cc3b58dca20652496b7)

## 4) 구현하지 못한 사항 (나중에 꼭 해결할 것들)

- Dropdown menu가 열릴 때 header가 같이 보이도록 하기
  - `position`값을 주고 `z-index`을 아무리 조절해 봐도 `header`가 dropdown의 검정색 배경 앞으로 나오지 않아서 애를 먹었는데, 결국엔 구현하지 못했다.
  - 그래서 원래의 사이트와는 다르게 드롭다운 메뉴 오른쪽 상단에 close button을 넣어서 구현해 두었다.
- Dropdown menu & Widget form이 닫힐 때의 애니메이션
  - 열릴 때만 구현하고, 닫힐 때는 구현하지 못했다. (CSS, JavaScript로 다 시도해 보았으나 구현하기 어려웠다.)
- Media query breakpoint 불일치 문제
  - 해결하진 못했지만, 해결하려고 시도해 보았던 것들을 [노션](https://yeonc.notion.site/Media-query-breakpoint-a1b4cf7ebc824696b1ae2da0086c4d07)에 정리해 두었다.

## 5) 회고

나의 첫 클론 코딩 프로젝트!

디자인 시안과 시중에 product로 존재하는 웹사이트, 이 둘 사이에서 어떤 걸 선택할까 고민하다가 후자를 선택한 이유는 **후자가 내 실력 향상에 도움이 좀 더 될 것 같아서**이다.

구체적인 메뉴얼이 주어지지 않은 상태에서 사이트 하나만 참고해서 내가 직접 요소들을 분석하면서 어떻게 하는 게 더 나을지 생각하는 과정 자체가 좋은 경험이 될 것 같다는 생각이 들었고, 그렇게 하는 과정에서 개발자 도구에도 많이 익숙해지니 더 괜찮다고 생각했다. 직접 페이지의 리소스를 하나하나 가져와서 세팅하는 과정 자체도 의미가 있다고 판단했다.

보는 것과 서술하는 것 그리고 직접 하는 것은 차원이 다르다.

간단해 보이는 것도, 어떻게 코딩을 해 나가야 할지 대략적으로 적어봐도, **막상 코딩을 시작하면 예상하지도 못한 곳에서 난관을 겪게 되는 경우가 허다했다.**

기존의 코드를 고쳐야 할 일도 몇 번 있었는데, 많은 부분들을 수정해야 할 때마다 정말 '**유지 보수가 용이하게 코드를 짜는 것이 중요하구나**'라는 생각을 계속적으로 했다. 물론 그것이 중요하다는 것을 몰랐던 건 아니지만, 직접 몸으로 부딪혀 보면서 몸소 깨달을 수 있었다. 앞으로는 이 점에 대해서 생각하고 유의하면서 코드를 짜야겠다.

프로젝트를 마무리할 즈음 해서 자꾸 아쉬운 점들이 눈에 보여서 이것 저것 고치기도 했는데, 시간은 더 걸렸을지 몰라도 내가 성장하는 시간이라고 생각하니 전혀 아깝지가 않았던 시간이었다.

ngrok clone coding 프로젝트를 통해 정말 많은 걸 배우고 느끼고 얻을 수 있었고, 나의 부족한 점들도 되돌아보고 채울 수 있었다. 앞으로 새로운 프로젝트들을 해 나갈 자신감 또한 얻어갈 수 있었다.

앞으로 많은 프로젝트들을 하겠지만, 나의 이 첫 프로젝트는 평생 잊지 못할 것이다.
