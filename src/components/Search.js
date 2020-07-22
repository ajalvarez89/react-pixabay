import React, { Component } from 'react';

class Search extends Component {

  searchRef = React.createRef();

  getData = (e) => {
    e.preventDefault();

    //get input value
    const term = this.searchRef.current.value

    //send value to main component
    this.props.dataSearch(term);
  }

  render() {
    return (
      <form onSubmit={this.getData}>
        <div className="row">
          <div className="form-group col-md-8">
            <input ref={this.searchRef} type="text" className="form-control
            form-control-lg" placeholder="Search an image"/>
          </div>
          <div className="form-group col-md-4">
            <input type="submit" className="btn btn-lg btn-danger btn-block" value="Search"/>
          </div>
        </div>
      </form>
    );
  }
}

export default Search;