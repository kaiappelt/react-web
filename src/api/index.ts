import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export default api;
// export const api = axios.create({
//   // eslint-disable-next-line no-undef
//   baseURL: process.env.REACT_APP_API,
// });

// export const createSession = async (email, password) => {
//   return new Promise((resolve, reject) => {
//     api
//       .post("/login", { email, password })
//       .then((response) => {
//         resolve(response);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };

// export const createUser = (user) => {
//   return new Promise((resolve, reject) => {
//     api
//       .post("/users", user)
//       .then((response) => {
//         resolve(response);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };
