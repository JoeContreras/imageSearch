import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID UedlpmQk9AymS6GNCaL9-fVbNv8IUDmjRK2liCQE1WY",
  },
});
