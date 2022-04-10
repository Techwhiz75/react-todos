import { useHistory, useParams } from "react-router";
import { useFetch } from "usehooks-ts";

const TodoDetails = () => {
  const { id } = useParams();
  const { data, error } = useFetch(`https://todo-server-7658.herokuapp.com/todos/${id}`)
  const history = useHistory();

  const handleDone = () => {
    fetch(`https://todo-server-7658.herokuapp.com/todos/${id}`, {
      method: "DELETE"
    }).then(() => {
      history.push("/")
    })
  }

  if (data) {
    return (
      <div className="todo-details">
        <h2>{data.name}:</h2>
        <h3>To be done by {data.time}</h3>
        <button onClick={handleDone}>Mark as done</button>
      </div>
    );
    } else if (error) {
      return (
        <div>{error}</div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
}
 
export default TodoDetails;