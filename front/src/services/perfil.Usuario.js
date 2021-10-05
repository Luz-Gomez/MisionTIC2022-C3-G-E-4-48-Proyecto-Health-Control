import httpClient from "./httpClient";

const END_POINT = "/api/perfilUsuarios";

const getAllUsuarios = () => httpClient.get(END_POINT);

export {
    getAllUsuarios
}