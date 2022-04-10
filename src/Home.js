import TodoList from "./TodoList";
import { useFetch } from "usehooks-ts";
import { useEffect } from "react";

const Home = () => {
  
  const { data, error } = useFetch("https://todo-server-7658.herokuapp.com/todos")

  let output = "";
  if (error) {
    output = error;
  } else if (!data) {
    output = "Loading...";
  } else {
    output = <TodoList todos={data}/>;
  }

  return (
    <div className="home-page">
      {output}
    </div>
  );
}

export default Home;