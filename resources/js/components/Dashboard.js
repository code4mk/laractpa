import React, { Component } from 'react';
import { Redirect, Link, Route, Switch,withRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import {http} from '../helpers/common/laxios'

class Dashboard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ''

      }
    }

    render() {
      if (localStorage.getItem('isAuth') && localStorage.getItem('isAuth') !== 'true' ) {
        return <Redirect to="/react/login" />
      }
        return (
          <div>
            <MainLayout history={this.props.history}></MainLayout>
              <main class="py-4">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-8 col-lg-8 col-sm-8o offset-2">
                      <div class="jumbotron">
                        <h1 class="display-4">Hi, {localStorage.getItem('u')}</h1>
                        <p class="lead">This is a Laravel React SPA app</p>
                        <hr class="my-4"/>
                        <p>Laravel + react + SPA + Rest Api + JWT</p>
                        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
          </div>
        );
    }
}

export default Dashboard
