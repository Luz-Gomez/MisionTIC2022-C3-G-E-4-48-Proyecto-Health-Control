import httpClient from "./httpClient";

const END_POINT = "/api/tomaPresion";

const getPresion = (mail) => httpClient.get(END_POINT + "/" + mail);

const insertPresion = (tomaPresion) => httpClient.post(END_POINT, tomaPresion);

export {
    getPresion,
    insertPresion,
}
