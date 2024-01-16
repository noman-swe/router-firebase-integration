import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} >Home</Route>
        <Route path='/login' element={<Login></Login>}>Home</Route>
        <Route path='/register' element={<Register></Register>}>Home</Route>

      </Routes>

    </div>
  );
}

export default App;
