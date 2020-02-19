import axios from "axios";

const networkInstance = axios.create({
    baseURL: "https://node-sample-api.herokuapp.com/api",
    timeout: 10000
    // headers: {"X-Custom-Header": "foobar"}
});

export default networkInstance;