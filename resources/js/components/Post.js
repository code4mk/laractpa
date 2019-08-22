import React, { Component } from 'react';
import { Redirect, Link, Route, Switch, withRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import {http} from '../helpers/common/laxios'

class Post extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      title: '',
      details: '',
      postTitle: '',
      postDetails: '',
      errors: []
    };
  }
  postCreate(){
    http.get('/react/api/post/create',{
        params:{
            title: this.state.title,
            details: this.state.details
        }
    }).then((response)=>{
      const self = this;
      if(response.data.staus === 'error'){
        self.setState({ errors: response.data.errors })
      }else{
        http.get('/react/api/posts')
          .then(function (response){
           self.setState({ posts: response.data })
           self.setState({ title: '' })
           self.setState({ details: '' })
          })
          .catch(function (error){
            console.log(error)
          });
      }

    })


  }

  showPost(e){
    http.get('/react/api/post/show',{
        params:{
            id: e,
        }
    }).then((response)=>{
      console.log(response.data)
      const self = this;
      self.setState({ postTitle: response.data.title })
      self.setState({ postDetails: response.data.details })
    })
  }
  componentDidMount() {
   const self = this;
   http.get('/react/api/posts')
     .then(function (response){
      self.setState({ posts: response.data })
     })
     .catch(function (error){
       console.log(error)
     });
}
    render() {
      if (localStorage.getItem('isAuth') === null || localStorage.getItem('isAuth') !== 'true' ) {
        return <Redirect to="/react/login" />
      }
        return (
          <div>
            <MainLayout history={this.props.history}></MainLayout>
            <main class="py-4">
              <div class="container">
                  <div class="row justify-content-center">
                      <div class="col-md-6">
                          <div class="card">
                              <div class="card-header">Publish new post</div>

                              <div class="card-body">


                                  <div class="form-group row">
                                      <label for="name" class="col-md-4 col-form-label text-md-right">Title</label>

                                      <div class="col-md-6">
                                          <input id="name" type="email" class="form-control" placeholder="post title" name="title" value={this.state.title} onChange={(e) => {this.setState({title: e.target.value,errors: []})}} />
                                            {(() => {

                                              if (this.state.errors.title) {
                                                return (
                                                  <p style={{color:"red"}}>{this.state.errors.title[0]}</p>
                                                  );
                                                }
                                          })()}
                                      </div>
                                  </div>

                                  <div class="form-group row">
                                      <label for="name" class="col-md-4 col-form-label text-md-right">Details</label>

                                      <div class="col-md-6">
                                          <textarea id="name"  class="form-control" placeholder="write details" name="details" value={this.state.details} onChange={(e) => {this.setState({details: e.target.value,errors: []})}}/>
                                            {(() => {

                                              if (this.state.errors.details) {
                                                return (
                                                  <p style={{color:"red"}}>{this.state.errors.details[0]}</p>
                                                  );
                                                }
                                          })()}
                                      </div>
                                  </div>






                                      <div class="form-group row mb-0">
                                          <div class="col-md-8 offset-md-4">
                                              <button type="submit" class="btn btn-primary" onClick={(e) => this.postCreate()}>
                                                  save
                                              </button>
                                          </div>
                                      </div>

                              </div>
                          </div>
                      </div>
                      <div class="col-md-6">
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">title</th>
                              <th scope="col">details</th>
                              <th scope="col">actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              this.state.posts.map((post) =>
                                <tr key={post.id}>
                                  <th scope="row">{post.id}</th>
                                  <td > {post.title}</td>
                                  <td > {post.details.substring(0, 100)} {post.details.length>100? '.....':''}</td>
                                  <td>
                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={(e) => this.showPost(post.id)}>
                                      show
                                    </button>
                                  </td>
                                </tr>
                              )
                            }

                          </tbody>
                        </table>

                      </div>
                  </div>
              </div>

              <div class="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">{this.state.postTitle}</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      {this.state.postDetails}
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                    </div>
                  </div>
                </div>
</div>

            </main>
          </div>
        );
    }
}

export default Post
