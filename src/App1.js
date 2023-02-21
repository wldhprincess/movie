
import './App.css';
import {useRef, useEffect} from 'react';

function App() {
  const inputRef = useRef();
  useEffect(() => {
    //console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`반갑습니다 ${inputRef.current.value} 님`);
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <input type="text" placeholder='이름을 입력하세요.' ref={inputRef}/>
      <button onClick={login}>저장</button>
    </div>
  );
}

export default App;