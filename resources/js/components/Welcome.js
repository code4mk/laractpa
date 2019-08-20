import React, { Component } from 'react';
import { Redirect, Link, Route, Switch } from 'react-router-dom'

class Welcome extends Component {
    render() {
        return (
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-8 col-lg-8 col-sm-8o offset-2">
                  <div class="jumbotron">
                    <h1 class="display-4">Hello, Laractpa!</h1>
                    <p class="lead">This is a Laravel React SPA app</p>
                    <hr class="my-4"/>
                    <p>Laravel + react + SPA + Rest Api + JWT</p>
                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Welcome
