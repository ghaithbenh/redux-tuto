import React from "react";
import { useSelector } from "react-redux";

export const Test = () => {
  const state = useSelector((state) => state.user.value);

  return (
    <>
      <div> component test {state.email}</div>
    </>
  );
};
