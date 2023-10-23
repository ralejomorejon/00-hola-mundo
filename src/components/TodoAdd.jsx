import React from "react";

export const TodoAdd = () => {
  return (
    <form>
      <input
        type="text"
        className="input-add"
        name="description"
        value="Perfeccionar PHP"
        placeholder="Que quieres hacer?"
        id=""
      />
      <button className="btn-add" type="submit">
        Agregar
      </button>
    </form>
  );
};
