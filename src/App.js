import { useEffect, useState } from "react";

// 리액트는 새로운 데이터가 들어올 때 마다 ui를 새로고침
function App() {
  // 1.변수 counter와 함수 setValue를 선언하고, counter의 초기값을 0으로 설정한 것
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  // onClick 함수는 setValue를 호출하며, 이전 값(prev)을 받아와서 1을 더한 값을 새로운 값으로 설정
  // 버튼을 클릭할 때마다 counter 값이 1씩 증가하게 됩니다. 
  // 이 코드는 React 컴포넌트 내부에서 상태를 관리하고 업데이트하는 방법 중 하나입니다.
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  // api를 딱 한번만 실행하고 싶을때, useEffacy
  useEffect(() => {
    console.log("only");
  }, []);

  //keyword가 변화할 때 코드를 실행한다.
  useEffect(() => {
    console.log("키보드가 입력할때만 실행");
  }, [keyword]);

  //counter가 변환될때만
  useEffect(() => {
    console.log("카운터가 변화할때만 실행");
  }, [counter]);

  //counter가 변환될때만
  useEffect(() => {
    console.log("카운터나 키보드 변화할때만 실행");
  }, [counter, keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
