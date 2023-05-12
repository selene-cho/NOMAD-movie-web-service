import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log('I run only once.');
  }, []);

  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  useEffect(() => {
    console.log("I run when 'keyword & counter' changes.");
  }, [keyword, counter]);

  // useEffect(() => {
  //   // keyword가 비어있지 않고 길이가 5자 이상일때, keyword state 변할때마다 아래 console.log 실행
  //   if (keyword !== '' && keyword.length > 5) {
  //     console.log('SEARCH FOR', keyword);
  //   }
  // }, [keyword]);

  return (
    <div>
      <input
        value={keyword}
        type="text"
        placeholder="Search here..."
        onChange={onChange}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
