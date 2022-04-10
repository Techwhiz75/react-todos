import { Link } from "react-router-dom";

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <div className="todo" key={todo.id}>
          <Link to={`/blogs/${todo.id}`}>
            <h3>{todo.name}</h3>
            <p>Must be done by {todo.time}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default TodoList;