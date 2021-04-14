import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burger-476a5-default-rtdb.firebaseio.com/",
});

export default instance;
