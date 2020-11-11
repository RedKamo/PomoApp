import React from 'react';

import '../assets/styles/SignUp.scss';
//import img_task from '../assets/images/img_task.svg';
import img_test from '../assets/images/img_test.jpg';

const SignUp =()=>{

  return(
    <React.Fragment>
    <div className="signup__container">
      <div className="signup__image">
        <img src={img_test} alt=""/>
      </div>
      <div className="signup__form">
      <h1 className="form__title">
            Create your account
          </h1>
        <form className="form__container" action="">
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