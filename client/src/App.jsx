import { useState, useEffect } from "react";
import Listing from "./components/Listing";

function App() {
  const [description, setDescription] = useState("");

  async function onSubmitForm(e) {
    e.preventDefault(); //Dont Refrsh after submitting
    const body = { description };
    const response = await fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    console.log(response);
    window.location = "/";
  }

  return (
    <>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
      <Listing />
    </>
  );
}
export default App;
