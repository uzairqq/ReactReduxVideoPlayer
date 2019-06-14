import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="feild">
            <label>Image Search</label>
            <input
              type="text"
              onChange={event => console.log(event.target.value)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
