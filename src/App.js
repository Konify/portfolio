import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Main from './pages/Main/Main'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap'
import './App.css'


function App() {

  return (
    <div className="">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Main }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
