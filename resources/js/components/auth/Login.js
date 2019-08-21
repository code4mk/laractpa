import React, { Component } from 'react';
import { Redirect, Link, Route, Switch, withRouter  } from 'react-router-dom'
import {http} from '../../helpers/common/laxios'
import MainLayout from '../../layout/MainLayout'

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: 'hiremostafa@gmail.com',
        password: 'mkmkmkmk'
      };
    }

    login(e) {
        http.get('/react/api/login',{
            params:{
                username: this.state.email,
                password: this.state.password
            }
        }).then((response)=>{
            localStorage.setItem('isAuth',response.data.auth)
            if(response.data.status){
                this.props.history.push("/react/dashboard");
            }
            console.log(response.data)
        })
    }

    render() {
        // check if user is authenticated then redirect him to home page
        if (localStorage.getItem('isAuth') && localStorage.getItem('isAuth') === 'true' ) {
          return <Redirect to="/react/dashboard" />
        }

        return (
          <div class="container">

            <MainLayout><h3>ok this is done </h3></MainLayout>

              <div class="row justify-content-center">
                  <div class="col-md-8">
                      <div class="card">
                          <div class="card-header">Login</div>

                          <div class="card-body">
                                  <div class="form-group row">
                                      <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                      <div class="col-md-6">
                                          <input id="email" type="email" class="form-control" name="email" value={this.state.email} onChange={(e) => {this.setState({email: e.target.value})}} />
                                      </div>
                                  </div>

                                  <div class="form-group row">
                                      <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                      <div class="col-md-6">
                                          <input id="password" type="password" class="form-control" name="password" value={this.state.password} onChange={(e) => {this.setState({password: e.target.value})}}/>
                                      </div>
                                  </div>
                                  <div class="form-group row mb-0">
                                      <div class="col-md-8 offset-md-4">
                                          <button class="btn btn-primary" onClick={(e) => this.login()}>
                                              Login
                                          </button>
                                      </div>
                                  </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

export default Login
