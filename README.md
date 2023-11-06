1.  JSX 문법이란 무엇일까요?
    -> 리액트를 사용 시 함수 안에 html, css, js 정보를 작성할 수 있는데 이를 jsx 라고 부른다.

2.  사용자가 입력하는 값, 또는 이미 입력된 값, 투두의 타이들과 같은 애플리케이션의 상태를 관리하기 위해 리액트의 어떤 기능을 사용하셨나요?
    -> usestate를 이용하여 입력값 입력된 값을 받아오고 화면에 보여지게 만들고 ,event.target.value를 버튼을 클릭시 카드에 보이게 작성하였다.

3.  애플리케이션의 **상태 값들을 컴포넌트 간 어떤 방식으로 공유하셨나요**?
    -> useState를 사용 하고 상태값을 업데이트 할려면 set 형식 호출하여 공유하였다.

4.  기능 구현을 위해 **불변성 유지가** 필요한 부분이 있었다면 하나만 설명해 주세요.
    -> 불편성이 필요한 부분은 아마도 const [card,SetCard] 인 것 같다 리액트 애플리케이션의 성능 최적화와 예측 가능한 동작을 보장하기 위해서 인듯...

5.  반복되는 컴포넌트를 파악하고 재사용할 수 있는 **컴포넌트로 분리해 보셨나요?** 그렇다면 **어떠한 이점이 있었나요?**
    -> 컴포넌트를 분리하였고 , 가독성이 불편해 질수 있는 코드를 시각적으로 보기 편해졌고, 협업할때 편리하다고 생각이 든다.
