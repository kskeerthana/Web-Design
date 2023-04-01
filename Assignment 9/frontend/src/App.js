import './App.css';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import Contacts from './pages/Contacts';
import Careers from './pages/Careers';
import AboutUs from './pages/AboutUs';


function App() {
  return (
    <div className="App">
      <Login />
           
    </div>
  );
}

export default App;
