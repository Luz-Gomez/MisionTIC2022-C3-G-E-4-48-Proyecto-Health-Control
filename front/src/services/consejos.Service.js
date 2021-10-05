import httpClient from "./httpClient";

const END_POINT = "/api/consejos";

const getAllConsejos = () => httpClient.get(END_POINT);

export {
    getAllConsejos
}