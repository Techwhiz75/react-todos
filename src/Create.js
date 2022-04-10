import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {

  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      time
    }

    fetch("https://todo-server-7658.herokuapp.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(() => {
      console.log("POSTED");
      history.push("/");
    })
  }

  return (
    <div className="create-todo container">
      <h2>Create a New Todo</h2>
      <form onSubmit={handleSubmit}>
        <div className="todo-name">
          <label>Todo Name: </label>
          <input type="text" required onChange={(e) => {
            setName(e.target.value);
          }} />
        </div>
        <div className="todo-time">
          <label>Todo Time: </label>
          <input type="text" required onChange={(e) => {
            setTime(e.target.value);
          }} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
 
export default Create;