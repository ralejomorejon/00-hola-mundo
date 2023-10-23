import { TodoList } from "./components/TodoList"

function App() {
 return(
  <>

  <div className="card-to-do">
    <h1>Lista de tareas</h1>
    <div className="counter-todos">
      <h3>No. de Tareas: 4</h3>
      <h3>Pendientes:3</h3>
    </div>

    <div className="add-todo">
      <h3></h3>
    </div>
  </div>
  <TodoList></TodoList>
  </>
 )
 };
export default App
