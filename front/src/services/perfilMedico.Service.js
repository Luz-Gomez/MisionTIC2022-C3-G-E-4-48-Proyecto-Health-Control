import httpClient from "./httpClient";

const END_POINT = "/api/perfilMedico";

const getAllMedico= () => httpClient.get(END_POINT);

const getMedico = (mail) => httpClient.get(END_POINT + "/" + mail);

const insertMedico = (perfilMedico) => httpClient.post(END_POINT, perfilMedico);

const updateMedico = (mail, perfilMedico) => httpClient.put(END_POINT + "/" + mail, perfilMedico);

export {
    getAllMedico,
    getMedico,
    insertMedico,
    updateMedico
}
