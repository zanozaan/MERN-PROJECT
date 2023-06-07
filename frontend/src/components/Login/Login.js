import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../assets/images/logo.png';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [alert, setAlert] = useState('');
  const [loginError, setLoginError] = useState('');

  const onChangeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
    setLoginError('');
  };

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setLoginError('');
  };

  const submitLogin = () => {
    const data = {
      username: username,
      password: password
    };
    axios.post('http://localhost:3001/login', data)
      .then(result => {
        if (result.data.token) {
          localStorage.setItem('token', result.data.token);
          setRedirect(true);
          setUsername('');
          setPassword('');
          setAlert(result.data.message);
          setTimeout(() => {
            setAlert('');
          }, 5000);
          navigate('/home');
        } else {
          setLoginError('Invalid username or password.');
        }
      })
      .catch(e => {
        setLoginError(e.response.data.message);
      });
  };

  return (
    <>
      {redirect && navigate('/home')}
      <div className='bg-info'>
        <div className='container d-flex justify-content-center align-items-center min-vh-100'>
          <div className='row border rounder-5 p-3 bg-white shadow box-area'>
            <div className='col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box'>
              <div className='featured-image mb-3'>
                <img src={logo} className='img-fluid 250px' alt='Logo' />
              </div>
              <p className='text-dark fs-2 fontp'>FM XXI CINEMA</p>
              <small className='text-dark text-wrap text-center fonts'>
              Recommendations for where to book tickets.
              </small>
            </div>
            <div className='col-md-6 right-box'>
              <div className='row align-items-center'>
                <div className='header-text mb-4'>
                  <h2>Hello, Again</h2>
                  <p>We are happy to have you back.</p>
                </div>
                {
                  loginError && (
                    <div className="alert alert-danger">
                    <p>{loginError}</p>
                    </div>
                  )
                }
                <div className='input-group mb-3'>
                  <input
                    type='text'
                    className='form-control form-control-lg bg-light fs-6'
                    placeholder='Username'
                    value={username}
                    onChange={onChangeUsername}
                    required="required"
                  />
                </div>
                <div className='input-group mb-1'>
                  <input
                    type='password'
                    className='form-control form-control-lg bg-light fs-6'
                    placeholder='Password'
                    value={password}
                    onChange={onChangePassword}
                    required="required"
                  />
                </div>
                <div className='input-group mb-3'>
                  <button
                    className='btn btn-lg btn-primary w-100 fs-6'
                    onClick={submitLogin}
                  >
                    Login
                  </button>
                </div>
                <div className='row'>
                  <small>
                    Don't have an account? <a href='/signup'>Sign Up</a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
