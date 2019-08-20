import React, { Component } from 'react'
import { Redirect, Link, Route, Switch } from 'react-router-dom'


import Welcome from '../components/welcome'
import Login from '../components/auth/login'
import Register from '../components/auth/register'

class routes extends Component {
    render() {
      return (
        <Switch>
          <Redirect exact from='/react' to='/react/home'/>
          <Route path="/react/home" component={Welcome} />
          <Route path="/react/login" component={Login} />
          <Route path="/react/register" component={Register} />
        </Switch>
      )
    }
  }
  export default routes
