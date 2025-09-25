import httpClient from "../http-common"

const getusers = () => {
    return httpClient.get("/users");
}

const saveUser = data => {
    return httpClient.post("/saveuser", data);
}

export default {getusers, saveUser};