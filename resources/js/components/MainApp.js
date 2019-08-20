import React, { Component } from 'react'
import { Redirect, Link, Route, Switch } from 'react-router-dom'
import Routes from '../routes'

class MainApp extends Component {
  render() {
    return (
      <div>
      <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
          <div class="container">
              <Link className="navbar-brand" to="/react">Laractpa</Link>


              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">

                  </ul>


                  <ul class="navbar-nav ml-auto">

                          <li class="nav-item">
                            <Link className="nav-link" to="/react/post">Blog</Link>
                          </li>
                          <li class="nav-item">
                            <Link className="nav-link" to="/react/post">Admin Posts</Link>
                          </li>

                          <li class="nav-item">
                            <Link className="nav-link" to="/react/dashboard">Dashboard</Link>
                          </li>
                          <li class="nav-item">
                            <Link className="nav-link" to="/react/login">Login</Link>
                          </li>
                          <li class="nav-item">
                            <Link className="nav-link" to="/react/register">Register</Link>
                          </li>


                  </ul>
              </div>
          </div>
      </nav>

      <main class="py-4">
        <Routes/>
      </main>

      </div>
    );
  }
}
export default MainApp
