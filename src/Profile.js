import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const state = useSelector((state) => state.user.value);

  return (
    <div>
      <p>email:{state.email}</p>
      <p>name:{state.name}</p>
      <p>lastname:{state.lastname}</p>
      <p>adresse:{state.adresse}</p>
    </div>
  );
}
