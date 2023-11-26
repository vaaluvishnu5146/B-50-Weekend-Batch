import React from "react";
import { setLoggedIn } from "../Redux/Reducers/AuthReducer.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatcher = useDispatch();
  const navigator = useNavigate();
  function login() {
    dispatcher(setLoggedIn(true));
    navigator("/app/notes");
  }
  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
}
