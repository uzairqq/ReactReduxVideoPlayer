import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID d1524e66db2b5fae613b185ee021f7b6d752eecbad36a4a6e8711ec88a8662fd"
  }
});
