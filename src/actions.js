import { LOGIN_URL } from "./apis";

export const LOGIN = "LOGIN";

// export const login = (account) => ({
//   type: INCREASE_ITEM,
//   id: id,
//   isIncrease: isIncrease,
// });

export const postLogin = (username, password) => {
  const axios = require("axios");
  return () => {
    axios
      .post(LOGIN_URL, {
        usernameOrEmail: username,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        localStorage.setItem(
          "token",
          `${response.data.tokenType} ${response.data.accessToken}`
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
