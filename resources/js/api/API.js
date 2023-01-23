import axios from "axios"

const BASE_API_URL = "http://localhost:8000/api";
const USER = {id: 1}

let AUTH_PARAMS = {user_id: USER.id}
axios.defaults.baseURL = BASE_API_URL
axios.defaults.params = AUTH_PARAMS

export default axios