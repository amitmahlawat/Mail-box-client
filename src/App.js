import logo from './logo.svg';
import './App.css';
import Texteditor from './Components/Editor';
import Welcome from './Components/welcome';
import { Button } from 'react-bootstrap';
import Signup from './Components/signup';
import { Route } from 'react-router-dom';
import NavBar from './Components/Navbar'
import { useSelector, UseSelector } from 'react-redux';
import Sent from './Components/Sent';
import Inbox from './Components/Inbox';
import EmailDeatils from './Components/EmailDetails';
function App() {

  const isLoggedin=useSelector(state=>state.authReducer.isLoggedin)
  return (
    <div className="App">
      <NavBar/>
      {!isLoggedin&&<Route path='/Login'>
      <Signup/>
      </Route>}
      <Route path="/" exact> 
        <Welcome/>
      </Route>
      <Route path="/Editor">
        <Texteditor/>
      </Route>
      <Route path="/sent">
        <Sent/>
      </Route>
      <Route path="/inbox">
        <Inbox/>
      </Route>
      <Route path="/EmailDetails">
        <EmailDeatils/>
      </Route>
    </div>
  );
}

export default App;
