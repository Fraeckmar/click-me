import axios from "axios"

const BASE_API_URL = "http://localhost:8000/api";

axios.defaults.baseURL = BASE_API_URL

export default axios