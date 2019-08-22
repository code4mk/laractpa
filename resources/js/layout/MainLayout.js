import React, { Component } from 'react'
import { Redirect, Link, Route, Switch   } from 'react-router-dom'
import {http} from '../helpers/common/laxios'

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'kamal'

    }
  }

  logout(e) {
    http.get('/react/api/logout').then((response)=>{
      localStorage.setItem('isAuth',false)
      localStorage.setItem('u','')

      this.props.history.push("/react/login");
    })
  }


  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <Link className="navbar-brand" to="/react"><img style={{width:"150px"}} src="/images/laractpa.png" alt=""/></Link>


                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">

                    </ul>


                    <ul class="navbar-nav ml-auto">

                            <li class="nav-item">
                              <Link className="nav-link" to="/react">Blog</Link>
                            </li>
                            {(() => {
                              let isAuth = localStorage.getItem('isAuth')
                              if (isAuth === 'true') {
                                return (
                                  <li class="nav-item">
                                     <Link className="nav-link" to="/react/post">Admin Post</Link>
                                  </li>
                                  );
                                }
                          })()}

                            <li class="nav-item">
                              <Link className="nav-link" to="/react/dashboard">Dashboard</Link>
                            </li>

                            {(() => {
                              let isAuth = localStorage.getItem('isAuth')
                              if (isAuth == 'true') {
                                return (
                                  <li class="nav-item dropdown">
                                      <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"  >
                                          {localStorage.getItem('u')}<span class="caret"></span>
                                      </a>

                                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                          <a class="dropdown-item" href="#" onClick={(e) => this.logout()}>
                                              Logout
                                          </a>


                                      </div>
                                  </li>
                                  // <li class="nav-item">
                                  //       <a className="nav-link" onClick={(e) => this.logout()}>LogOut</a>
                                  // </li>
                                  );
                                } else {
                                  return (

                                   <li class="nav-item">
                                      <Link className="nav-link" to="/react/login">Login</Link>
                                   </li>
                                  );
                                }
                          })()}

                          {(() => {
                            let isAuth = localStorage.getItem('isAuth')
                            if (isAuth !== 'true') {
                              return (
                                <li class="nav-item">
                                   <Link className="nav-link" to="/react/register">Register</Link>
                                </li>
                                );
                              }
                        })()}







                    </ul>
                </div>
            </div>
        </nav>
      </div>
    );
  }
}
export default MainLayout
