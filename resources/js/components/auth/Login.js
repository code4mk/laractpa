import React, { Component } from 'react';
import { Redirect, Link, Route, Switch } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-md-8">
                      <div class="card">
                          <div class="card-header">Login</div>

                          <div class="card-body">
                              <form method="POST" action="Login">


                                  <div class="form-group row">
                                      <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                      <div class="col-md-6">
                                          <input id="email" type="email" class="form-control" name="email" value="" />
                                      </div>
                                  </div>

                                  <div class="form-group row">
                                      <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                      <div class="col-md-6">
                                          <input id="password" type="password" class="form-control" name="password" required autocomplete="current-password"/>
                                      </div>
                                  </div>



                                  <div class="form-group row mb-0">
                                      <div class="col-md-8 offset-md-4">
                                          <button type="submit" class="btn btn-primary">
                                              Login
                                          </button>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

export default Login
