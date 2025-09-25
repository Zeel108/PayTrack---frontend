import httpClient from "../http-common"

const getusers = () => {
    return httpClient.get("/users");
}

const saveUser = data => {
    return httpClient.post("/auth/signup", data);
}

const checkUser = data => {
    return httpClient.post("/auth/login", data);
}

export default {getusers, saveUser, checkUser};