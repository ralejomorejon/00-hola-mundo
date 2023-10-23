import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";

function App() {
  return (
    <>
      <div className="card-to-do">
        <h1>Lista de tareas</h1>
        <div className="counter-todos">
          <h3>No. de Tareas: 4</h3>
          <h3>Pendientes:3</h3>
        </div>

        <div className="add-todo">
          <h3>Agregar tarea:</h3>
          <TodoAdd></TodoAdd>
        </div>
        <TodoList></TodoList>
      </div>
    </>
  );
}
export default App;
