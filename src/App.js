import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './page/Home';
import Obat from './page/Obat';
import History from './page/History';
import Saran from './page/Saran';
import Loader from './page/Loader';
import Login from './page/Login';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/home/detail/:category/:id">
            <Users />
          </Route>
          <Route path="/home/saran">
            <Saran />
          </Route>
          <Route path="/home/history">
            <History />
          </Route>
          <Route path="/home/:category">
            <Obat />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Loader />
          </Route>
        </Switch>
    </Router>
  );
}

const Users = () => {
  return(
    <div>users</div>
  )
}

export default App;
