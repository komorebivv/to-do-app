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


// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Countries from './components/Countries';

// function App() {
//   return (
//     // <div className="App">
//     // <Carousel />

//     // </div>
//     <Router>
//       <Navigation />
//       <Switch>
//     <Route exact path="/">
//       <Carousel />
//     </Route>
//     <Route exact path="/about">
//       <About />
//     </Route>
//     <Route exact path="/trivias">
//       <Trivias />
//     </Route>
//     <Route exact path="/trivia/:id">
//       <Trivia />
//       </Route >
//     <Route exact path="/countries">
//     <Countries />
//     </Route>
//       </Switch>
//     </Router>