import './App.css';
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
