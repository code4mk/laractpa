import React, { Component } from 'react'
import { Redirect, Link, Route, Switch, withRouter   } from 'react-router-dom'
import Routes from '../routes'
import {http} from '../helpers/common/laxios'
// var createHost = require('cross-domain-storage/host');
//
//
// var storageHost = createHost([
//         {
//             origin: 'http://127.0.0.1:8000',
//             allowedMethods: ['get', 'set', 'remove']
//         }
//     ]);

class MainApp extends Component {
  componentDidMount() {



  }

  render() {
    let a
    let b







    return (
      <div>
        <Routes/>
      </div>
    );
  }
}
export default MainApp
