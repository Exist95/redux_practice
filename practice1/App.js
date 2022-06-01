import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector, payload } from "react-redux";
import Box from "./component/Box";

//리덕스는 자바스크립트에서도 사용 가능하다.
//리액트에서 리덕스를 쓰려면 react-redux를 설치해야 한다.
//스테이트 복습하기!!
function App() {
  let click = useSelector((state) => state.click);
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);
  let discount = useSelector((state) => state.discount);
  const dispatch = useDispatch();

  const cnt = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };
  const decrease = () => {
    dispatch({ type: "DESCREMENT", payload: { num2: -1 } });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "noona", password: "123" } });
  };
  return (
    <div>
      <h1>
        {id},{password}
      </h1>
      <h1>{click}</h1>
      <h1>{discount}</h1>
      <button onClick={cnt}>증가!!</button>
      <button onClick={login}>Login</button>
      <button onClick={decrease}>감소!!!!!</button>
      <Box />
    </div>
  );
}

export default App;
