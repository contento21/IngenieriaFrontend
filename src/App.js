
import './App.css';
import Homepage from "./components/homepage/Homepage"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [user, setLoginUser] = useState({

  })

  const getSession = () => {
    return JSON.parse(sessionStorage.getItem("user"))
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              getSession() && getSession()._id ? <Homepage /> : <Login />
            }</Route>
          <Route path="/Login"><Login></Login></Route>
          <Route path="/Register"><Register /></Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
