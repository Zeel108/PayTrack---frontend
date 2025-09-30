import httpClient from "../http-common";

const saveexpense = (data) => {
    return httpClient.post("/saveexpense",data);
}

export default {saveexpense};