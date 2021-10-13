import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Users from './components/Users';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/users" component={Users}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
