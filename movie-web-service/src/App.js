import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') {
      return; // toDo 비어 있으면 이 함수 작동 하지 않도록
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo('');
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          type="text"
          placeholder="Write your to do... "
          onChange={onChange}
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
