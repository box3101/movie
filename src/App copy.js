import { useState } from "react";

function App() {
  // toDo라는 상태 변수를 생성하고, 이를 변경하기 위한 setTodo 함수를 생성
  const [toDo, setTodo] = useState("");

  // seState를 사용하여 toDos라는 상태 변수를 생성하고, 이를 변경하기 위한 setTodos 함수를 생성
  // toDos 상태 변수는 현재 할 일 목록 정보를 배열 형태로 담게 됩니다. 
  // setTodos 함수를 사용하여 이 값을 변경할 수 있습니다. 초기 값으로는 빈 배열이 지정
  const [toDos, setTodos] = useState([]);

  // onChange 함수를 생성하여, 이 함수가 호출될 때 인자로 전달된 이벤트 객체의 target.value를 이용하여 setTodo 함수를 호출하는 구문
  const onChange = (e) => setTodo(e.target.value);

  //  onSubmit 함수를 생성하여, 이 함수가 호출될 때 입력된 내용을 todo 상태 변수에 추가하고, 이를 배열 형태로 담은 toDos 상태 변수를 setTodos 함수를 이용해 변경하는 구문
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    // setTodos 함수를 사용하여 toDos 상태 변수의 값을 변경하고, 이전 상태 값을 유지하도록 currentArray 매개변수를 사용합니다. 이때, toDo 값을 배열의 가장 앞에 추가해야 하므로 spread 연산자를 사용하여 기존 배열에 새로운 값을 추가
    setTodos(currentArray => [toDo, ...currentArray])
    //s etTodo 함수를 호출하여, 입력 필드의 값을 초기화합니다. 이렇게 함으로써 사용자가 새로운 할 일을 추가할 때마다 입력 필드가 비워지게 됩니다.
    setTodo("");
  }

  console.log(toDos);

  return (
    <div>
      <h1>my to dos ({toDos.length}) </h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button>Add To do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item,index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default App;
