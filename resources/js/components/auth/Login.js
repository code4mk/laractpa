import React, { Component } from 'react';
import { Redirect, Link, Route, Switch, withRouter  } from 'react-router-dom'
import {http} from '../../helpers/common/laxios'
import MainLayout from '../../layout/MainLayout'
import Cookies from 'js-cookie'
var createGuest = require('cross-domain-storage/guest')
var bazStorage = createGuest('http://laractpa.herokuapp.com');

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: 'hiremostafa@gmail.com',
        password: 'hiremostafa',
        errors: [],
        invalid: ''
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
            localStorage.setItem('u',response.data.name)
            bazStorage.set("isAuth", response.data.auth, function(error, data) {
              // foo is now set to 'bar'
            });
            bazStorage.set("u", response.data.name, function(error, data) {
              // foo is now set to 'bar'
            });

            Cookies.set('isAuth2', response.data.user,{ domain: 'http://127.0.0.1:8000' });
            if(response.data.status){
                this.props.history.push("/react/dashboard");
            }else if(response.data.status === 'error'){

              const self = this
              self.setState({ errors: response.data.errors })
            }else{
              const self = this
              self.setState({ invalid: 'Your username or password is wrong' })
            }

        })
    }

    render() {
        // check if user is authenticated then redirect him to home page
        if (localStorage.getItem('isAuth') && localStorage.getItem('isAuth') === 'true' ) {
          return <Redirect to="/react/dashboard" />
        }

        return (
          <div>
            <MainLayout history={this.props.history}></MainLayout>
            <main class="py-4">
            <div class="container">

                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-header">Login</div>

                            <div class="card-body">
                                    <div class="form-group row">
                                        <label for="email" class="col-md-4 col-form-label text-md-right">username/email</label>

                                        <div class="col-md-6">
                                            <input id="email" type="email" class="form-control" name="email" value={this.state.email} onChange={(e) => {this.setState({email: e.target.value,invalid:'' ,errors:[]})}} />
                                              {(() => {

                                                if (this.state.errors.username) {
                                                  return (
                                                    <p style={{color:"red"}}>{this.state.errors.username[0]}</p>
                                                    );
                                                  }
                                            })()}

                                            {(() => {

                                              if (this.state.invalid !== '') {
                                                return (
                                                  <p style={{color:"red"}}>{this.state.invalid}</p>
                                                  );
                                                }
                                          })()}
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                        <div class="col-md-6">
                                            <input id="password" type="password" class="form-control" name="password" value={this.state.password} onChange={(e) => {this.setState({password: e.target.value,invalid:'',errors:[]})}}/>
                                              {(() => {

                                                if (this.state.errors.password) {
                                                  return (
                                                    <p style={{color:"red"}}>{this.state.errors.password[0]}</p>
                                                    );
                                                  }
                                            })()}
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
          </main>

          </div>
        );
    }
}

export default Login
