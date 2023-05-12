# [Nomad] ReactJS로 영화 웹 서비스 만들기

### React JS

<p>state 변하면, 컴포넌트 재랜더링</p>
<p>= 모든 코드 재실행</p>
<p>필요없는 코드까지 재실행 될 수 있음</p>

### State

<p>기본적으로 데이터가 저장되는 곳</p><br />

### React.Memo

<p>부모 컴포넌트의 state가 변경될 때, 모든 자식 컴포넌트 재렌더링 됨 -> 어플리케이션 느려지는 원인이 될 수 있음</p>
<p>React.memo(컴포넌트)를 통해서 해당 컴포넌트를 기억해뒀다가 props가 변경된 컴포넌트만 재렌더링하게 함.</p>

### useEffect

<p>언제 코드를 실행할지 선택할 수 있다</p>

```javascript
useEffect(() => {실행하고 싶은 것}, [dependency list]);
```

<p>첫번째 props : 실행하고 싶은 함수</p>
<p>두번째 props(dependency list) : 해당 리스트의 값 변화할 때만 실행되도록 지정</p>
