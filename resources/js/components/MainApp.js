import React, { Component } from 'react'
import { Redirect, Link, Route, Switch, withRouter   } from 'react-router-dom'
import Routes from '../routes'
import {http} from '../helpers/common/laxios'

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Laractpa'
    }
  }
  logout(e) {
    http.get('/react/api/logout').then((response)=>{
      localStorage.setItem('isAuth',false)

      //this.props.history.push("/react/login");

      browserHistory.push('/react/login')

    })
  }
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
                         <li class="nav-item">
                               <a className="nav-link" onClick={(e) => this.logout()}>LogOut</a>
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
