import React from "react";
import { FaEdit } from "react-icons/fa";
export const TodoUpdate = () => {
  return (
    <form>
      <input
        type="text"
        className="input-update"
        name="description"
        value="Perfeccionar PHP"
        placeholder="Que quieres hacer?"
        id=""
      />
      <button className="btn-edit" type="submit">
        <FaEdit />
      </button>
    </form>
  );
};
