import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../../assets/images/logo.png';

const SignUp = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert]       = useState('');
  const [error, setError]       = useState('');

  const onChangeUsername = (e) => {
    const value = e.target.value
    setUsername(value)
    setError('')
  }

  const onChangeEmail = (e) => {
    const value = e.target.value
    setEmail(value)
    setError('')
  }

  const onChangePassword = (e) => {
    const value = e.target.value
    setPassword(value)
    setError('')
  }

  const klikDaftar = () => {
    const data = {
      username: username,
      email   : email,
      password  : password
    }
    axios.post('http://localhost:3001/daftar', data)
    .then(result => {
      if(result){
        if(result.data){
          setUsername('')
          setEmail('')
          setPassword('')
          setAlert(result.data.message)
          setTimeout(() => {
            setAlert('')
          }, 3000)
        }
      }
    }) 
    .catch(e => {
      setError(e.response.data.message)
    })
  }

  return (
    <div className='bg-info'>
      <div className='container d-flex justify-content-center align-items-center min-vh-100'>
        <div className='row border rounder-5 p-3 bg-white shadow box-area'>
          {/* LEFTBOX */}
          <div className='col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box'>
            <div className='featured-image mb-3'>
              <img src={logo} className='img-fluid 250px' alt='Logo' />
            </div>
            <p className='text-dark fs-2 fontp'>FM XXI CINEMA</p>
            <small className='text-dark text-wrap text-center fonts'>
            Recommendations for where to book tickets.
            </small>
          </div>
          {/* RIGHTBOX */}
          <div className='col-md-6 right-box'>
            <div className='row align-items-center'>
              <div className='header-text mb-4'>
                <h2>Sign Up</h2>
                <p>Come join us.</p>
              </div>
              {
                error && (
                    <div className='alert alert-danger'>
                     <p>{error}</p>
                     </div>
                )
              }
              {
                alert && (
                    <div className='alert alert-primary'>
                     <p>{alert}</p>
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
                  required="required"/>
              </div>
              <div className='input-group mb-3'>
                <input
                  type='text'
                  className='form-control form-control-lg bg-light fs-6'
                  placeholder='Email Address'
                  value={email}
                  onChange={onChangeEmail}
                  required="required"/>
              </div>
              <div className='input-group mb-3'>
                <input
                  type='password'
                  className='form-control form-control-lg bg-light fs-6'
                  placeholder='Password'
                  value={password}
                  onChange={onChangePassword}
                  required="required"/>
              </div>
              <div className='input-group mb-3'>
                <button
                  className='btn btn-lg btn-primary w-100 fs-6'
                  onClick={klikDaftar}>
                  Daftar
                </button>
                <button
                  className='btn btn-lg btn-warning w-100 mt-3 fs-6'
                  onClick={() => navigate('/')}>
                  Kembali
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp