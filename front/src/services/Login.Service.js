import httpClient from "./httpClient";

const END_POINT = "/api/autenticar";

const validarUsuario = (mail, contraseña) => {
    const usuario = {
        "usuario": mail,
        "contraseña": contraseña
    };
    return httpClient.post(END_POINT, usuario);
};

export {
    validarUsuario
}

