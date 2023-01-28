import React from 'react';
import '../../Styles/LoginStyle.css';
import logo from '../../Assets/Netflix-Logo.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='loginMainContainer'>
        <img className='logoOnLogin' src={logo} alt="#" />
        <div className='loginContainer'>
          <h2 className='loginHeading'>Sign In</h2>
          <div className='loginInputContainer'>
            <input className='loginEmailInput inp' type='email' placeholder='Email or phone number' />
            <input className='loginPwdInput inp' type='password' placeholder='Password' />
          </div>
          <button className='loginBtn'>Sign In</button>
          <div className='loginRememberAndHelpContainer'>
            <div className='loginRemember'>
              <input className='rememberCheckBox' type='checkbox' />
              <p>Remember me</p>
            </div>
            <a href='#home'>Need help?</a>
          </div>
          <span className='ques'>New to Netflix? <a href='#home' onClick={() => { navigate(-1) }}  className='signUpNowBtn'>Sign up now</a></span>
          <p className='captchaInfo'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<a className='learnMore' href='#home'> Learn more.</a></p>
        </div>
      </div>
    </>
  );
}

export default Login