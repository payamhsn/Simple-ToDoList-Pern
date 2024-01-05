import { useState, useEffect } from "react";
import Editing from "./Editing";

function Listing() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  async function deleteTodo(x) {
    const response = await fetch(`http://localhost:5000/todos/${x}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    setTodos(todos.filter((todo) => todo.todo_id !== x));
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      {/*  */}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <Editing todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Listing;
