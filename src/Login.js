import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/user";

export default function Login() {
  const dispatch = useDispatch();

  const loginInfo = {
    email: "ghaith@gmail.com",
    name: "ghaith",
    lastname: "ben hassine",
    adresse: "sousse",
  };

  return (
    <div>
      <button onClick={() => dispatch(login(loginInfo))}>connect{""}</button>
      <button onClick={() => dispatch(logout())}>deconnecter</button>
    </div>
  );
}
