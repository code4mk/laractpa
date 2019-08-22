import React, { Component } from 'react';
import { Redirect, Link, Route, Switch, withRouter } from 'react-router-dom'
import {http} from '../../helpers/common/laxios'
import MainLayout from '../../layout/MainLayout'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      errors: {}
    };
  }

  register() {

      http.get('/react/api/u/register',{
          params:{
              name: this.state.name,
              username: this.state.username,
              email: this.state.email,
              password: this.state.password
          }
      }).then((response)=>{

        if(response.data.staus === 'error'){
          const self = this
          self.setState({ errors: response.data.errors })

        }else{
          this.props.history.push("/react/login");
        }




      })
  }
    render() {
        return (
          <div>
            <MainLayout history={this.props.history}></MainLayout>
            <main class="py-4">
              <div class="container">
                  <div class="row justify-content-center">
                      <div class="col-md-8">
                          <div class="card">
                              <div class="card-header">Register</div>

                              <div class="card-body">

                                  <div class="form-group row">
                                      <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                                      <div class="col-md-6">
                                          <input id="uname" type="email" class="form-control" name="name" placeholder='your name' value={this.state.name} onChange={(e) => {this.setState({name: e.target.value,errors:[]})}}/>
                                            {(() => {

                                              if (this.state.errors.name) {
                                                return (
                                                  <p style={{color:"red"}}>{this.state.errors.name[0]}</p>
                                                  );
                                                }
                                          })()}
                                      </div>
                                  </div>

                                  <div class="form-group row">
                                      <label for="name" class="col-md-4 col-form-label text-md-right">Username</label>

                                      <div class="col-md-6">
                                          <input id="name" type="email" class="form-control" name="name" placeholder='your username' value={this.state.username} onChange={(e) => {this.setState({username: e.target.value,errors:[]})}}/>
                                            {(() => {

                                              if (this.state.errors.username) {
                                                return (
                                                  <p style={{color:"red"}}>{this.state.errors.username[0]}</p>
                                                  );
                                                }
                                          })()}
                                      </div>
                                  </div>


                                      <div class="form-group row">
                                          <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                          <div class="col-md-6">
                                              <input id="email" type="email" class="form-control" name="email" placeholder='your email' value={this.state.email} onChange={(e) => {this.setState({email: e.target.value,errors:[]})}} />
                                                {(() => {

                                                  if (this.state.errors.email) {
                                                    return (
                                                      <p style={{color:"red"}}>{this.state.errors.email[0]}</p>
                                                      );
                                                    }
                                              })()}
                                          </div>
                                      </div>

                                      <div class="form-group row">
                                          <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                          <div class="col-md-6">
                                              <input id="password" type="password" class="form-control" name="password" placeholder="your password" value={this.state.password} onChange={(e) => {this.setState({password: e.target.value,errors: []})}} />
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
                                              <button type="submit" class="btn btn-primary" onClick={(e) => this.register()}>
                                                  Register
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
