import axios from "axios";

const blogFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
});

export default blogFetch;