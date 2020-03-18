import React, { Component } from 'react';
import axios from 'axios';
import api from '../utils/api';
import { Link } from "react-router-dom";
import LogoStacked from "../pages/assets/img/viral-effect-white-stacked.png";


export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: '', 
      loggedIn: false
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,    
    })
    // console.log(this.state)

  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,    
    })
    // console.log(this.state)

  }
  onSubmit(e) {
    e.preventDefault(); 
    const user = {
      username: this.state.username,
      password: this.state.password,
      loggedIn: false,
    }

    if (this.state.username === "" || this.state.password === "") {
      document.getElementById("fields-error").classList.remove("d-none");
        document.getElementById("fields-error").classList.add("form-error");
      return 
    }

    api.signupUser(user)
    .then(res => {
      window.location.replace("/home");
    })
    .catch(err => {
      document.getElementById("login-error").classList.remove("d-none");
        document.getElementById("login-error").classList.add("form-error");
    });
  }
  render() {
    return (
      <form onSubmit = {this.onSubmit}>
        <div className="text-center">
        <img src={LogoStacked} alt="The Viral Effect" className="d-block text-center mb-5 mx-auto" style={{width: "200px"}} />
        </div>
        <h3>Sign Up</h3>
        <div className="form-group">
          <label>Username</label>
          <input onChange= {this.onChangeUsername} type="username" className="form-control" placeholder="Enter username" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input onChange = {this.onChangePassword} type="password" className="form-control" placeholder="Enter password" />
        </div>

        <div id="fields-error" class="d-none mb-2"><small>Please fill out all of the fields</small></div>
        <div id="login-error" class="d-none mb-2"><small>An error occurred. Please try again.</small></div>

        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
        <p className="mt-4 mb-0 text-center">Already have an account? <Link to={"/"}>Log in</Link></p>
       </form>
    );
  }
}