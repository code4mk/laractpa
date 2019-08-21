import React, { Component } from 'react'
import { Redirect, Link, Route, Switch, withRouter   } from 'react-router-dom'
import Routes from '../routes'
import {http} from '../helpers/common/laxios'

class MainApp extends Component {
  
  render() {
    return (
      <div>
        <Routes/>
      </div>
    );
  }
}
export default MainApp
