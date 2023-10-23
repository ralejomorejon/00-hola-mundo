import React from "react";
import { BsTrash } from "react-icons/bs";
import { TodoUpdate } from "./TodoUpdate";

export const TodoItem = () => {
  return (
    <li>
      <span>
        <label htmlFor="" className="container-done"></label>
      </span>
      <TodoUpdate />
      <button className="btn-delete">
        <BsTrash />
      </button>
    </li>
  );
};
