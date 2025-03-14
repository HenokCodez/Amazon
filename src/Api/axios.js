import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-b9ebb/us-central1/api",

  // deployed versions of on render.com
  baseURL: "https://amazon-api-deploy-qdb1.onrender.com",
});

export { axiosInstance };
