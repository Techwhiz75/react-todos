import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Overrated Todos App</h1>
      <p>( My first try with react )</p>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Add a Todo</Link>
      </div>
    </header>
  );
}
 
export default Header;