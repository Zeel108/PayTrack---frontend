import httpClient from "../http-common"

const getusers = () => {
    return httpClient.get("/users");
}

export default {getusers};