import httpClient from "./httpClient";

const END_POINT = "/api/usuarios";

const insertUsuario = (usuarios) => httpClient.post(END_POINT, usuarios);

export {
   insertUsuario
}
