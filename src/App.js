import React, { Component } from 'react';
import Search from './components/Search';
import Result from './components/Result';

class App extends Component {

  state ={
    term: '',
    images: []
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
      term
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
        <Result
          images = {this.state.images}
        />
      </div>
    );
  }
}

export default App;
