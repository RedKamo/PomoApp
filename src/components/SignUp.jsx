import React from 'react';

import '../assets/styles/SignUp.scss';
import img_signup from '../assets/images/img_signup.svg';

const SignUp =()=>{

  return(
    <React.Fragment>
    <div className="signup__container">
      <div className="signup__image">
        <img src={img_signup } alt=""/>
      </div>
      <div className="signup__form">
        <form className="form__container" action="">
          <h1 className="form__title">
            Create your account
          </h1>
          <div className="form__group">
            <label htmlFor="name">
              <div className="label__text">Name</div>
                <input type="text" name="name" id="name" type="text" required />
            </label>
            <label htmlFor="email">
              <div className="label__text">Email</div>
                <input type="email" name="email" id="email" required/>
            </label>
            <label htmlFor="password">
              <div className="label__text">Password</div>
                <input type="password" name="password" id="password"/>
            </label>
            <label htmlFor="buttonsubmit">
              <div className="label__text">
                <button type="submit">Sign Up</button>
              </div>
            </label>
          </div>
        </form>
      </div>
    </div>
  </React.Fragment>
  )
}
export default SignUp;