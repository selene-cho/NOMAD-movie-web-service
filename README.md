# [Nomad] ReactJS로 영화 웹 서비스 만들기

## STATE

<p>기본적으로 데이터가 저장되는 곳</p><br />
<p>부모 컴포넌트의 state가 변경될 때, 모든 자식 컴포넌트 재렌더링 됨 -> 어플리케이션 느려지는 원인이 될 수 있음</p>
<p>React.memo(컴포넌트)를 통해서 헤당 컴포넌트를 기억해뒀다가 props가 변경된 컴포넌트만 재렌더링하게 함.</p>
