import React, { Component } from "react";

class SearchBar extends Component {
  handleChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="feild">
            <label>Image Search</label>
            <input type="text" onChange={this.handleChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
