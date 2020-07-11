import {
  LOGIN_URL,
  CREATE_CATEGORY_URL,
  FIND_ALL_CATEGORY_URL,
  disableCategoryById,
} from "./apis";
import { setCookie, getCookie } from "./common";

export const LOGIN_PROCESS = "LOGIN_PROCESS";
export const CREATE_ACTION = "CREATE_ACTION";
export const RESET_ACTION = "RESET_ACTION";
export const FIND_ALL_CATEGORY = "FIND_ALL_CATEGORY";

export const loginProcess = (statusLogin) => ({
  type: LOGIN_PROCESS,
  statusLogin: statusLogin,
});
export const createAction = (statusAction, id = -1) => ({
  type: CREATE_ACTION,
  statusAction: statusAction,
  id: id,
});
export const resetAction = (statusAction = -1) => ({
  type: RESET_ACTION,
  statusAction: statusAction,
});
export const findAllCategory = (listCategory, statusAction) => ({
  type: FIND_ALL_CATEGORY,
  listCategory: listCategory,
  statusAction: statusAction,
});

export const disableCategoryByIdFunc = (id) => {
  const axios = require("axios");
  return (dipatch) => {
    axios({
      method: "get",
      url: disableCategoryById(id),
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token"),
      },
    })
      .then(function (response) {
        if (response.status === 200) {
          dipatch(createAction(response.status, response.data.id));
        }
      })
      .catch(function (error) {
        if (!error.response) alert("NETWORK ERROR");
        else dipatch(createAction(error.response.status));
      });
  };
};
export const findAllCategoryFunc = () => {
  const axios = require("axios");
  return (dipatch) => {
    axios({
      method: "get",
      url: FIND_ALL_CATEGORY_URL,
    })
      .then(function (response) {
        if (response.status === 200) {
          dipatch(findAllCategory(response.data, response.status));
        }
      })
      .catch(function (error) {
        if (!error.response) alert("NETWORK ERROR");
        else dipatch(createAction(error.response.status));
      });
  };
};

export const resetActionFunc = () => {
  return (dipatch) => {
    dipatch(resetAction());
  };
};

export const createCategory = (category) => {
  const axios = require("axios");
  return (dipatch) => {
    axios({
      method: "post",
      url: CREATE_CATEGORY_URL,
      data: category,
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token"),
      },
    })
      .then(function (response) {
        if (response.status === 200) {
          dipatch(createAction(response.status));
        }
      })
      .catch(function (error) {
        if (!error.response) alert("NETWORK ERROR");
        else dipatch(createAction(error.response.status));
      });
  };
};

export const postLogin = (username, password) => {
  const axios = require("axios");
  return (dipatch) => {
    axios
      .post(LOGIN_URL, {
        usernameOrEmail: username,
        password: password,
      })
      .then(function (response) {
        if (response.status === 200) {
          let token = `${response.data.tokenType} ${response.data.accessToken}`;
          setCookie("token", token, 1);
          dipatch(loginProcess(response.status));
        }
      })
      .catch(function (error) {
        if (!error.response) alert("NETWORK ERROR");
        else dipatch(loginProcess(error.response.status));
      });
  };
};
