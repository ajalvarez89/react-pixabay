import React, { Component } from 'react';
import Search from './components/Search';
import Result from './components/Result';

class App extends Component {

  state ={
    term: '',
    images: [],
    page: ''
  }

  beforePage = () => {
    //read state of current page
    let page = this.state.page;

    if(page === 1) return null;

    //increse page
    page -= 1;

    //change state
    this.setState({
      page
    })
  }

  afterPage = () => {
    //read state of current page
    let page = this.state.page;

    //increse page
    page += 1;

    //change state
    this.setState({
      page
    })
  }
  //arrow funtion
  requestApi = () => {
    const term = this.state.term
    const url=`https://pixabay.com/api/?key=17574040-6c3dd872553670ee8635c1238&q=${term}`;
    // console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({images : result.hits}))
  }

  dataSearch = (term) => {
    this.setState({
      term: term,
      page: 1
    }, () => {
      this.requestApi();
    })
  }

  render(){
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Search Images</p>
          <Search
            dataSearch={this.dataSearch}
          />
        </div>
        <div className="row justify-content-center">
          <Result
            images = {this.state.images}
            beforePage={this.beforePage}
            afterPage={this.afterPage}
          />
        </div>
      </div>
    );
  }
}

export default App;
