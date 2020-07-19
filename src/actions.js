import {
  LOGIN_URL,
  CREATE_CATEGORY_URL,
  FIND_ALL_CATEGORY_URL,
  FIND_CATEGORY_BY_IS_ACTIVE_URL,
  switchCategoryById,
  CREATE_PRODUCT_URL,
  FIND_ALL_PRODUCT_URL,
  FIND_PRODUCT_BY_NAMESEO_URL,
  FIND_PRODUCTS_BY_CATEGORY_NAMESEO,
  findProductByState,
  DELETE_PRODUCT_BY_ID_URL,
  DELETE_CATEGORY_BY_ID_URL,
  UPDATE_PRODUCT,
  UPDATE_CATEGORY,
  FIND_CATEGORY_BY_ID,
  FIND_ALL_PRODUCT_BY_CONTAIN_NAME_URL,
} from "./apis";
import { setCookie, getCookie } from "./common";

export const LOGIN_PROCESS = "LOGIN_PROCESS";
export const CREATE_ACTION = "CREATE_ACTION";
export const RESET_ACTION = "RESET_ACTION";
export const FIND_CATEGORY = "FIND_ALL_CATEGORY";
export const FIND_ALL_PRODUCT = "FIND_ALL_PRODUCT";
export const FIND_HOT_PRODUCT = "FIND_HOT_PRODUCT";
export const FIND_BUY_MORE_PRODUCT = "FIND_BUY_MORE_PRODUCT";
export const FIND_NORMAL_PRODUCT = "FIND_NORMAL_PRODUCT";
export const FIND_NEW_PRODUCT = "FIND_NEW_PRODUCT";
export const DELETE_PRODUCT_BY_ID = "DELETE_PRODUCT_BY_ID";
export const DELETE_CATEGORY_BY_ID = "DELETE_CATEGORY_BY_ID";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_TO_CART = "REMOVE_TO_CART";
export const IN_DE_CREASE = "IN_DE_CREASE";
export const FIND_SIGNLE_CATEGORY = "FIND_SIGNLE_CATEGORY";
export const FIND_ALL_PRODUCT_CONTAIN_NAME = "FIND_ALL_PRODUCT_CONTAIN_NAME";

export const FIND_SIGNLE_PRODUCT_BY_NAMESEO = "FIND_SIGNLE_PRODUCT_BY_NAMESEO";
export const SWITCH_STATUS_CATEGORY = "SWITCH_STATUS_CATEGORY";

export const findAllProductContainNameObj = (products, statusAction) => ({
  statusAction: statusAction,
  type: FIND_ALL_PRODUCT_CONTAIN_NAME,
  products: products,
});
export const loginProcess = (statusLogin) => ({
  type: LOGIN_PROCESS,
  statusLogin: statusLogin,
});
export const addToCart = (item) => ({
  type: ADD_TO_CART,
  item: item,
});
export const inDeCrease = (item, inDe) => ({
  type: IN_DE_CREASE,
  item: item,
  inDe: inDe,
});
export const removeItemCart = (item) => ({
  type: REMOVE_TO_CART,
  item: item,
});
export const deleteProduct = (resData, statusAction, index) => ({
  type: DELETE_PRODUCT_BY_ID,
  resData: resData,
  statusAction: statusAction,
  index: index,
});
export const deleteCategory = (resData, statusAction, index) => ({
  type: DELETE_CATEGORY_BY_ID,
  resData: resData,
  statusAction: statusAction,
  index: index,
});
export const findNewProducts = (newProducts, statusAction) => ({
  type: FIND_NEW_PRODUCT,
  newProducts: newProducts,
  statusAction: statusAction,
});
export const findHotProduct = (HotProducts, statusAction) => ({
  type: FIND_HOT_PRODUCT,
  HotProducts: HotProducts,
  statusAction: statusAction,
});
export const findBuyMoreProduct = (buyMoreProducts, statusAction) => ({
  type: FIND_BUY_MORE_PRODUCT,
  buyMoreProducts: buyMoreProducts,
  statusAction: statusAction,
});
export const findNormalProduct = (normalProducts, statusAction) => ({
  type: FIND_NORMAL_PRODUCT,
  normalProducts: normalProducts,
  statusAction: statusAction,
});
export const createAction = (statusAction, id = -1) => ({
  type: CREATE_ACTION,
  statusAction: statusAction,
  id: id,
});

export const switchStatusItem = (id, index) => ({
  type: SWITCH_STATUS_CATEGORY,
  id: id,
  index: index,
});
export const resetAction = (statusAction = -1) => ({
  type: RESET_ACTION,
  statusAction: statusAction,
});
export const findCategory = (listCategory, statusAction) => ({
  type: FIND_CATEGORY,
  listCategory: listCategory,
  statusAction: statusAction,
});
export const findAllProduct = (listProduct, statusAction) => ({
  type: FIND_ALL_PRODUCT,
  listProduct: listProduct,
  statusAction: statusAction,
});

export const findSignleProductByNameSeoObj = (product, statusAction) => ({
  type: FIND_SIGNLE_PRODUCT_BY_NAMESEO,
  product: product,
  statusAction: statusAction,
});
export const findSignleCategoryObj = (category, statusAction) => ({
  type: FIND_SIGNLE_CATEGORY,
  category: category,
  statusAction: statusAction,
});

export const logOut = () => {
  return (dispatch) => {
    setCookie("token", "", 0);
    dispatch(loginProcess(-1));
  };
};

export const switchCategoryByIdFunc = (id, index) => {
  const axios = require("axios");
  return (dispatch) => {
    axios({
      method: "get",
      url: switchCategoryById(id),
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token"),
      },
    })
      .then(function (response) {
        if (response.status === 200) {
          dispatch(switchStatusItem(id, index));
        }
      })
      .catch(function (error) {
        if (!error.response) alert("NETWORK lôi");
        else dispatch(createAction(error.response.status));
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
          dipatch(findCategory(response.data, response.status));
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
export const updateCategory = (category) => {
  const axios = require("axios");
  return (dipatch) => {
    axios({
      method: "post",
      url: UPDATE_CATEGORY,
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
        if (!error.response) dipatch(loginProcess(599));
        else dipatch(loginProcess(error.response.status));
      });
  };
};

//Find Category By Is Active = true

export const findCategoryByIsActive = () => {
  const axios = require("axios");
  return (dipatch) => {
    axios({
      method: "get",
      url: FIND_CATEGORY_BY_IS_ACTIVE_URL,
    })
      .then(function (response) {
        if (response.status === 200) {
          dipatch(findCategory(response.data, response.status));
        }
      })
      .catch(function (error) {
        if (!error.response) alert("NETWORK ERROR");
        else dipatch(createAction(error.response.status));
      });
  };
};

export const createProduct = (product) => {
  const axios = require("axios");
  return (dipatch) => {
    axios({
      method: "post",
      url: CREATE_PRODUCT_URL,
      data: product,
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

export const updateProduct = (product) => {
  const axios = require("axios");
  return (dipatch) => {
    axios({
      method: "post",
      url: UPDATE_PRODUCT,
      data: product,
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

//Find Category By Is Active = true

export const findAllProductProcess = () => {
  const axios = require("axios");
  return (dipatch) => {
    axios({
      method: "get",
      url: FIND_ALL_PRODUCT_URL,
    })
      .then(function (response) {
        if (response.status === 200) {
          dipatch(findAllProduct(response.data, response.status));
        }
      })
      .catch(function (error) {
        if (!error.response) alert("NETWORK ERROR");
        else dipatch(createAction(error.response.status));
      });
  };
};
export const findSignleProductByNameSeo = (nameSeo) => {
  const axios = require("axios");
  return (dipatch) => {
    axios({
      method: "get",
      url: FIND_PRODUCT_BY_NAMESEO_URL + nameSeo,
    })
      .then(function (response) {
        if (response.status === 200) {
          dipatch(
            findSignleProductByNameSeoObj(response.data, response.status)
          );
        }
      })
      .catch(function (error) {
        if (!error.response) alert("NETWORK ERROR");
        else dipatch(createAction(error.response.status));
      });
  };
};
export const findCategoryById = (id) => {
  const axios = require("axios");
  return (dipatch) => {
    axios({
      method: "get",
      url: FIND_CATEGORY_BY_ID + id,
    })
      .then(function (response) {
        if (response.status === 200) {
          dipatch(findSignleCategoryObj(response.data, response.status));
        }
      })
      .catch(function (error) {
        if (!error.response) alert("NETWORK ERROR");
        else dipatch(createAction(error.response.status));
      });
  };
};
export const findProductsByCategoryNameSeo = (nameSeo) => {
  const axios = require("axios");
  return (dipatch) => {
    axios({
      method: "get",
      url: FIND_PRODUCTS_BY_CATEGORY_NAMESEO + nameSeo,
    })
      .then(function (response) {
        if (response.status === 200) {
          dipatch(findAllProduct(response.data, response.status));
        }
      })
      .catch(function (error) {
        if (!error.response) alert("NETWORK ERROR");
        else dipatch(createAction(error.response.status));
      });
  };
};
export const deleteProductById = (id, index) => {
  const axios = require("axios");
  return (dipatch) => {
    axios({
      method: "get",
      url: DELETE_PRODUCT_BY_ID_URL + id,
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token"),
      },
    })
      .then(function (response) {
        if (response.status === 200) {
          dipatch(deleteProduct(response.data, response.status, index));
        }
      })
      .catch(function (error) {
        if (!error.response) alert("NETWORK ERROR");
        else dipatch(createAction(error.response.status));
      });
  };
};
export const deleteCategoryById = (id, index) => {
  const axios = require("axios");
  return (dipatch) => {
    axios({
      method: "get",
      url: DELETE_CATEGORY_BY_ID_URL + id,
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token"),
      },
    })
      .then(function (response) {
        if (response.status === 200) {
          dipatch(deleteCategory(response.data, response.status, index));
        }
      })
      .catch(function (error) {
        if (!error.response) alert("NETWORK ERROR");
        else dipatch(createAction(error.response.status));
      });
  };
};
export const findByProductByState = (state) => {
  const axios = require("axios");
  return (dipatch) => {
    axios({
      method: "get",
      url: findProductByState(state),
    })
      .then(function (response) {
        if (response.status === 200) {
          if (state === 0)
            dipatch(findHotProduct(response.data, response.status));
          else if (state === 1)
            dipatch(findBuyMoreProduct(response.data, response.status));
          else if (state === 2)
            dipatch(findNewProducts(response.data, response.status));
          else dipatch(findNormalProduct(response.data, response.status));
        }
      })
      .catch(function (error) {
        if (!error.response) alert("NETWORK ERROR");
        else dipatch(createAction(error.response.status));
      });
  };
};
/**
 *
 * @param {*} state
 */
export const findAllProductContainName = (requestParam) => {
  const axios = require("axios");
  return (dipatch) => {
    axios({
      method: "get",
      url: `${FIND_ALL_PRODUCT_BY_CONTAIN_NAME_URL}?name=${requestParam}`,
    })
      .then(function (response) {
        if (response.status === 200) {
          dipatch(findAllProductContainNameObj(response.data, response.status));
        }
      })
      .catch(function (error) {
        if (!error.response) alert("NETWORK ERROR");
        else dipatch(createAction(error.response.status));
      });
  };
};
export const addToCartFunc = (product, buyPackage) => {
  let item;
  if (buyPackage)
    item = {
      product: product,
      quanty: buyPackage.quanty,
      size: buyPackage.size,
    };
  else item = { product: product, quanty: 1, size: "s" };

  return (dipatch) => {
    dipatch(addToCart(item));
  };
};

export const deleteItemCart = (product) => {
  return (dipatch) => {
    dipatch(removeItemCart(product));
  };
};

export const inDeCreaseFunc = (product, inDe) => {
  return (dipatch) => {
    dipatch(inDeCrease(product, inDe));
  };
};
