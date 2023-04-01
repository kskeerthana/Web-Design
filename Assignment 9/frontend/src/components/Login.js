import React, { Component } from 'react'
import axios from 'axios';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import LandingPage  from './LandingPage';
import App from '../App';
export default class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username : "",
      password: "",
      isAuthenticated: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  
  handleSubmit(e) {
    e.preventDefault();
    const { email, username, password } = this.state;
    console.log(email, username, password );
    const user = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username
  }
   axios.post("http://127.0.0.1:3001/api/users/login", user)
        .then(response => {
          console.log(response.data.flag);
          if(response.data.status == "Not Valid"){
            alert("Invalid Credentials");
            return;
          }
          if(response.data.flag){
            this.setState({
              isAuthenticated: true
            })
          }
        });
  }
  render() {
    const {isAuthenticated} = this.state;
    if(isAuthenticated){
        return(
          
            <Routes>
              <Route path="*" element={<LandingPage />}/>
            </Routes>
            )
    }
    return (
        <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
            <div className="image">
            </div>
          </div>
          <div className="body-form">
           <form onSubmit={this.handleSubmit}>
                <div className="input-group mb-3">
                        <input type="text" className="form-control rounded" placeholder="Username*" 
                        onChange={(e) => this.setState({ username: e.target.value })}
                        />
                </div>
                <div className="input-group mb-3">
                        <input type="text" className="form-control rounded" placeholder="Email*" 
                        onChange={(e) => this.setState({ email: e.target.value })}
                        />
                </div>
                <div className="input-group mb-3">
                        <input type="password" className="form-control rounded" placeholder="Password*" 
                        onChange={(e) => this.setState({ password: e.target.value })}
                        />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
            </form>
            </div>
        </div>
       </div>   
           )
  }
}