import httpClient from "./httpClient";

const END_POINT = "/api/autenticar";

const validarUsuario = (mail, contraseña) => {
    const usuario = {
        "mail": mail,
        "contraseña": contraseña
    };
    return httpClient.post(END_POINT, usuario);
};

const insertUsuario = (usuarios) => httpClient.post(END_POINT, usuarios);

export {
    validarUsuario,
    insertUsuario
}

