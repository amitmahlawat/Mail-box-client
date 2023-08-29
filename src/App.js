import logo from './logo.svg';
import './App.css';
import Welcome from './Components/welcome';
import { Button } from 'react-bootstrap';
import Signup from './Components/signup';
import Navbar from './Components/Navbar';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route path='/Login'>
      <Signup/>
      </Route>
      <Route path="/" exact> 
        <Welcome/>
      </Route>
    </div>
  );
}

export default App;
