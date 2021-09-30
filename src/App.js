import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import MainList from './components/MainList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
    <><h1 className="logo">ToDo-List</h1></>
    <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>
      <Route exact path="/register">
      <RegisterPage />
      </Route>
      <Route exact path="/lists">
      <MainList />
      </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
