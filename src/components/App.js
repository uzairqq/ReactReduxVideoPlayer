import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      },
      headers: {
        Authorization:
          "Client-ID d1524e66db2b5fae613b185ee021f7b6d752eecbad36a4a6e8711ec88a8662fd"
      }
    });
    console.log(response);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar runWhenSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
