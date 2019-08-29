import React, { Component } from 'react';
import { Redirect, Link, Route, Switch,withRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import {http} from '../helpers/common/laxios'
import Cookies from 'js-cookie'
// var createGuest = require('cross-domain-storage/guest')
// var bazStorage = createGuest('http://laractpa.herokuapp.com');

class Dashboard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ''

      }
    }

    componentDidMount() {

      // bazStorage.set("sso_username", "kamal kamal 2", function(error, data) {
      //   // foo is now set to 'bar'
      // });
      //
      // bazStorage.set("sso_username11", "kamal kamal 211", function(error, data) {
      //   // foo is now set to 'bar'
      // });
      //
      //
      // bazStorage.get("sso_username", function(error, data) {
      //   if(data){
      //     console.log(data)
      //   }
      // });

      // bazStorage.get("sso_username", function(error, data) {
      //   if(data){
      //     localStorage.setItem('sso_username',data)
      //   }
      // });







    }

    render() {





      //   bazStorage.get('sso_username', function(error, value) {
      //     if(true){
      //       console.log('kamal is here')
      //     }
      // })






   // console.log('isRegister = ' + Cookies.get('isRegister'))
   //
   //    console.log(document.cookie)
   //    console.log(localStorage.getItem('isAuth'))
   // <iframe id="iframeId" width="1260" height="315" src="http://laractpa.herokuapp.com"></iframe>


      // if (localStorage.getItem('isAuth') === null || localStorage.getItem('isAuth') !== 'true' ) {
      //   return <Redirect to="/react/login" />
      // }
        return (
          <div>
            <MainLayout history={this.props.history}></MainLayout>
              <main class="py-4">

                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-8 col-lg-8 col-sm-8o offset-2">
                      <div class="jumbotron">
                        <h1 class="display-4">Hi,{localStorage.getItem('u')} </h1>
                        <p class="lead">This is a Laravel React SPA app</p>
                        <hr class="my-4"/>
                        <p>Laravel + React + SPA + Rest Api </p>
                        <a class="btn btn-primary btn-lg" href="http://github.com/code4mk/laractpa" target="_blank" role="button">Learn more</a>
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
