import React from 'react';
import '../App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useNavigate } from "react-router-dom"; 
import Login from '../components/Login/Login';
import UserProfile from '../components/Profile/UserProfile';
import Home from '../container/Home';
import SignUp from '../components/Login/SignUp/SignUp';
import HistoryPayment from '../components/Payment/HistoryPayment';
import BuyTicket from '../components/Ticketing/BuyTicket';
import NotFoundPage from '../components/NotFound/NotFoundPage';
import MovieList from '../components/Movie/MovieList';
import AddMovie from '../components/Movie/AddMovie';
import EditMovie from '../components/Movie/EditMovie';

function Routers () { 
  // const navigate = useNavigate();

  return (
    <div>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/history' element={<HistoryPayment />}/>
          <Route path='/list' element={<MovieList />}/>
          <Route path='/add' element={<AddMovie />}/>
          <Route path='/edit/:id' element={<EditMovie />}/>
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
    </div>
  );
};

export default Routers;