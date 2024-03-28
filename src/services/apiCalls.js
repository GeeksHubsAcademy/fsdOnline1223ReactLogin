import axios from "axios";

// const API_URL = "https://rickandmortyapi.com/api"
const API_URL = "http://localhost:4000/api/";
// const API_URL = "aquí hay una url para un entorno de desarrollo"

export const registerNewUserCall = async () => {};

export const loginCall = async (credentials) => {
  return await axios.post(`${API_URL}auth/login`, credentials);
};

// export const bringAllCharacters = async () => {
//     const res = await axios.get("https://rickandmortyapi.com/api/character", /*headers*/)

//     return res
// }

export const bringAllCharacters = async () => {
  const res = await axios.get(`${API_URL}/character` /*headers*/);

  return res.data.results;
};

export const bringCharacterById = async (id) => {
  // puedo preparar la información para enviar al servidor
  const res = await axios.get(`${API_URL}/character/${id}`);

  return res.data;
};

// .get("url", {headers}(opcional))
// .post("url", {body}, {headers})
// .put("url", {body}, {headers})
// .delete("url", {headers})
