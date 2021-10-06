import httpClient from "./httpClient";

const END_POINT = "/api/perfilUsuario";

const getAllPerfil= () => httpClient.get(END_POINT);

const getPerfil = (mail) => httpClient.get(END_POINT + "/" + mail);

const insertPerfil = (perfilUsuario) => httpClient.post(END_POINT, perfilUsuario);

const updatePerfil = (mail, perfilUsuario) => httpClient.put(END_POINT + "/" + mail, perfilUsuario);

export {
    getAllPerfil,
    getPerfil,
    insertPerfil,
    updatePerfil
}
