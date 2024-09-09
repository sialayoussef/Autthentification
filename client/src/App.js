import './App.css';
import Home from './Components/Home';
import NavAuth from './Components/NavAuth';
import {Routes, Route} from 'react-router-dom'
import Profil from './Components/Profil';
import Register from './Components/Register';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import ErrorHandling from './Components/ErrorHandling';
function App() {
  return (
   <div>
      <NavAuth/>
      <ErrorHandling/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Profil" element={<PrivateRoute><Profil/></PrivateRoute>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Login" element={<Login/>}/>
      </Routes>
   </div>
  );
}

export default App;
