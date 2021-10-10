import httpClient from "./httpClient";

const END_POINT = "api/usuarios";

const registrarUsuario = (tipo, mail, contraseña) => {
    const registro = {
        "tipo": tipo,
        "mail": mail,
        "contraseña": contraseña
    };
    return httpClient.post(END_POINT, registro);
};
export {
    registrarUsuario
}