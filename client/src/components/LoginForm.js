import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import api from '../utils/api';
import LogoStacked from "../pages/assets/img/viral-effect-white-stacked.png";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: '', 
      loggedIn: false,
      users: []
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,    
    })
    console.log(this.state)

  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,    
    })
    console.log(this.state)

  }
  onSubmit(e) {
    e.preventDefault(); 
    const user = {
      username: this.state.username,
      password: this.state.password,
      loggedIn: true,
    }

    api.loginUser(user)
    .then (res => {
        window.location.replace("/home");
      })
      .catch(err => {
        document.getElementById("login-error").classList.remove("d-none");
        document.getElementById("login-error").classList.add("form-error");
      });  
  }
  render() {
    return (
      <form className="border-left ml-lg-3 pl-lg-5 py-3" onSubmit = {this.onSubmit}>
        <img src={LogoStacked} alt="The Viral Effect" className="d-block d-lg-none mb-5 mx-auto" style={{width: "200px"}} />
        <h3 className="mb-4 text-center">Login</h3>
        <div className="form-group">
          {/* <label>Username</label> */}
          <input onChange= {this.onChangeUsername} type="username" className="form-control" placeholder="Enter username" />
        </div>

        <div className="form-group">
          {/* <label>Password</label> */}
          <input onChange = {this.onChangePassword} type="password" className="form-control" placeholder="Enter password" />
        </div>
        <div id="login-error" class="d-none mb-2"><small>An error occurred. Please try again.</small></div>
        <button type="submit" className="btn btn-primary btn-block">Submit</button>

        <p className="mt-4 mb-0">Don't have an account? <Link to={"/signup"}>Sign up</Link></p>
       </form>
       
    );
  }
}