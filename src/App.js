import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import Header from "./Header";
import Home from "./Home";
import TodoDetails from "./TodoDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <TodoDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
