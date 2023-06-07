import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BuyTicket.css';

const BuyTicket = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [selectedMovieTitle, setSelectedMovieTitle] = useState('');

  useEffect(() => {
    populateUI();
  }, []);

  useEffect(() => {
    updateSelectedCount();
  }, [selectedSeats]);

  const containerClickHandler = (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('booked')) {
      e.target.classList.toggle('selected');
      updateSelectedSeats();
    }
  };

  const movieSelectChangeHandler = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const selectedValue = e.target.value;
    const selectedOption = e.target.options[selectedIndex].text;

    setTicketPrice(+selectedValue);
    setSelectedMovieIndex(selectedIndex);
    setSelectedMovieTitle(selectedOption);
    updateSelectedCount();
  };

  const updateSelectedSeats = () => {
    const seats = document.querySelectorAll('.row .seat:not(.booked)');
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeats].map((seat) => {
      return [...seats].indexOf(seat);
    });

    setSelectedSeats(seatsIndex);
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
  };

  const updateSelectedCount = () => {
    const selectedSeatsCount = selectedSeats.length;
    const count = document.getElementById('count');
    const total = document.getElementById('total');

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
  };

  const populateUI = () => {
    const seats = document.querySelectorAll('.row .seat:not(.booked)');
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.length > 0) {
      seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
          seat.classList.add('selected');
        }
      });
      setSelectedSeats(selectedSeats);
    }
  };

  const navigate = useNavigate();

  return (
    <div className='Mybody'>
      <div className='movie-container'>
        <label>Pick a movie: {selectedMovieTitle}</label>
        <select id='movie' onChange={movieSelectChangeHandler} value={selectedMovieIndex}>
          <option>Choose</option>
          <option value='12'>ANTMAN</option>
          <option value='13'>Avengers</option>
          <option value='11'>Gundala</option>
          <option value='9'>Inception</option>
          <option value='10'>JOKER</option>
          <option value='14'>Raden Saleh</option>
          <option value='15'>Spiderman</option>
          <option value='16'>Sri Asih</option>
          <option value='17'>Starwars</option>
          <option value='18'>Venom</option>
        </select>
      </div>

      <ul className='showcase'>
        <li>
          <div className='seat'></div>
          <small>Available</small>
        </li>
        <li>
          <div className='seat selected'></div>
          <small>Selected</small>
        </li>
        <li>
          <div className='seat booked'></div>
          <small>Booked</small>
        </li>
      </ul>

      <div className='container' onClick={containerClickHandler}>
        <div className='screen'></div>
        <div className='row'>
          <div className='seat'>A1</div>
          <div className='seat'>A2</div>
          <div className='seat'>A3</div>
          <div className='seat booked'>A4</div>
          <div className='seat booked'>A5</div>
          <div className='seat'>A6</div>
          <div className='seat'>A7</div>
          <div className='seat'>A8</div>
        </div>
        <div className='row'>
          <div className='seat booked'>B1</div>
          <div className='seat'>B2</div>
          <div className='seat'>B3</div>
          <div className='seat'>B4</div>
          <div className='seat'>B5</div>
          <div className='seat'>B6</div>
          <div className='seat'>B7</div>
          <div className='seat'>B8</div>
        </div>
        <div className='row'>
          <div className='seat'>C1</div>
          <div className='seat'>C2</div>
          <div className='seat'>C3</div>
          <div className='seat'>C4</div>
          <div className='seat'>C5</div>
          <div className='seat'>C6</div>
          <div className='seat booked'>C7</div>
          <div className='seat booked'>C8</div>
        </div>
        <div className='row'>
          <div className='seat'>D1</div>
          <div className='seat booked'>D2</div>
          <div className='seat booked'>D3</div>
          <div className='seat'>D4</div>
          <div className='seat'>D5</div>
          <div className='seat'>D6</div>
          <div className='seat'>D7</div>
          <div className='seat'>D8</div>
        </div>
        <div className='row'>
          <div className='seat'>E1</div>
          <div className='seat'>E2</div>
          <div className='seat'>E3</div>
          <div className='seat'>E4</div>
          <div className='seat booked'>E5</div>
          <div className='seat'>E6</div>
          <div className='seat'>E7</div>
          <div className='seat booked'>E8</div>
        </div>
        <div className='row'>
          <div className='seat'>F1</div>
          <div className='seat'>F2</div>
          <div className='seat'>F3</div>
          <div className='seat'>F4</div>
          <div className='seat'>F5</div>
          <div className='seat booked'>F6</div>
          <div className='seat booked'>F7</div>
          <div className='seat booked'>F8</div>
        </div>
      </div>

      <p className='text'>
        You have selected <span id='count'>0</span> seats for a price of $ <span id='total'>0</span>
      </p>

      <button
      className='btn btn-lg btn-secondary w-10 fs-6'
      onClick={() => navigate('/booked')}>
      Booked
      </button>
                  
    </div>
  );
};

export default BuyTicket;
