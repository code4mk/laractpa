import React, { Component } from 'react'
import { Redirect, Link, Route, Switch,BrowserRouter } from 'react-router-dom'
// import Cookies from 'js-cookie'

import Welcome from '../components/welcome'
import Login from '../components/auth/login'
import Register from '../components/auth/register'
import Dashboard from '../components/dashboard'
import Post from '../components/post'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/react/login', state: {from: props.location}}} />}
    />
  )
}

class routes extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isAuth: true,
      }


    }
    // componentDidMount() {
    //   // let a = (localStorage.getItem('isAuth') === 'true' ? true : false ;
    //   const self = this;
    //   self.setState({ isAuth: Cookies.get('isAuth')})
    // }

    render() {
      return (
        <Switch>
          <Redirect exact from='/react' to='/react/home'/>
          <Route path="/react/home" component={Welcome} />
          <Route path="/react/login" component={Login} />
          <Route path="/react/register" component={Register} />
          <Route path="/react/dashboard" component={Dashboard} />
          <Route path="/react/post" component={Post} />
          // <PrivateRoute authed={this.state.isAuth} path='/react/dashboard' component={Dashboard} />
        </Switch>
      )
    }
  }
  export default routes
