import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Notfound from './components/Notfound';
import Header from './components/Header';
import EventHandling from './components/EventHandling';
import Todo from './components/Todo';

function App() {
  return (
    <div>
      {/* <EventHandling /> */}
      <BrowserRouter>
      <Header />
        {/* <Link className='btn btn-link' to="/home">Home</Link>
        <Link className='btn btn-outline-primary' to="/login">Login</Link> */}
        <Routes>
            <Route element={<Home></Home>} path="/" /> 
            <Route element={<Home></Home>} path="home" /> 
            <Route element={<Login></Login>} path="login" />
            <Route element={<Register></Register>} path="register" />
            <Route element={<EventHandling />} path="event" />
            <Route element={<Todo />} path="Todo" />
            <Route element={<Notfound />} path="*" />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
