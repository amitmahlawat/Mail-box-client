import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Signup from './Components/signup';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Signup/>
    </div>
  );
}

export default App;
