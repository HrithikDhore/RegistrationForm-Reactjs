import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './components/home';
import Adduser from './components/adduser';
import Edituser from './components/edituser';

function App() {
  return (
    <div className="App">
      <h1>Hrithik Crud Operations</h1>
      <Routes>
      <Route exact path="/" element={<Home></Home>}></Route>
      <Route path="/adduser" element={<Adduser></Adduser>}></Route>
      <Route path="/edituser/:id" element={<Edituser></Edituser>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
