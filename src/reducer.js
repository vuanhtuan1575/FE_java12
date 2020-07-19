import {
  LOGIN_PROCESS,
  CREATE_ACTION,
  RESET_ACTION,
  FIND_CATEGORY,
  SWITCH_STATUS_CATEGORY,
  FIND_ALL_PRODUCT,
  FIND_SIGNLE_PRODUCT_BY_NAMESEO,
  FIND_HOT_PRODUCT,
  FIND_BUY_MORE_PRODUCT,
  FIND_NORMAL_PRODUCT,
  FIND_NEW_PRODUCT,
  DELETE_PRODUCT_BY_ID,
  DELETE_CATEGORY_BY_ID,
  ADD_TO_CART,
  IN_DE_CREASE,
  REMOVE_TO_CART,
  FIND_SIGNLE_CATEGORY,
  FIND_ALL_PRODUCT_CONTAIN_NAME,
} from "./actions";
const initialState = {
  statusLogin: -1,
  statusAction: -1,
  products: [],
  hotProducts: [],
  buyMoreProducts: [],
  normalProducts: [],
  newProducts: [],
  categorys: [],
  product: undefined,
  category: undefined,
  carts: [],
  citys: [],
  totalPrice: 0,
};
const reducer = (state = initialState, action) => {
  let listCart;
  let index;
  let tempTotalPrice;
  switch (action.type) {
    case LOGIN_PROCESS:
      return { ...state, statusLogin: action.statusLogin };
    case CREATE_ACTION:
      return { ...state, statusAction: action.statusAction };

    case RESET_ACTION:
      return { ...state, statusAction: action.statusAction };
    case SWITCH_STATUS_CATEGORY:
      let tempCategorys = state.categorys.slice();
      tempCategorys[action.index].isActive = !tempCategorys[action.index]
        .isActive;
      return { ...state, categorys: tempCategorys };
    case FIND_CATEGORY:
      return {
        ...state,
        statusAction: action.statusAction,
        categorys: action.listCategory,
      };
    case FIND_ALL_PRODUCT:
      return {
        ...state,
        statusAction: action.statusAction,
        products: action.listProduct,
      };
    case FIND_SIGNLE_PRODUCT_BY_NAMESEO:
      return {
        ...state,
        statusAction: action.statusAction,
        product: action.product,
      };
    case FIND_ALL_PRODUCT_CONTAIN_NAME:
      return {
        ...state,
        statusAction: action.statusAction,
        products: action.products,
      };
    case FIND_SIGNLE_CATEGORY:
      return {
        ...state,
        statusAction: action.statusAction,
        category: action.category,
      };
    case FIND_HOT_PRODUCT:
      return {
        ...state,
        statusAction: action.statusAction,
        hotProducts: action.HotProducts,
      };
    case FIND_BUY_MORE_PRODUCT:
      return {
        ...state,
        statusAction: action.statusAction,
        buyMoreProducts: action.buyMoreProducts,
      };
    case FIND_NORMAL_PRODUCT:
      return {
        ...state,
        statusAction: action.statusAction,
        normalProducts: action.normalProducts,
      };
    case FIND_NEW_PRODUCT:
      return {
        ...state,
        statusAction: action.statusAction,
        newProducts: action.newProducts,
      };
    case DELETE_PRODUCT_BY_ID:
      let array = [...state.products];
      array.splice(action.index, 1);
      return {
        ...state,
        statusAction: action.statusAction,
        products: array,
      };
    case DELETE_CATEGORY_BY_ID:
      let arrayCategory = [...state.categorys];
      arrayCategory.splice(action.index, 1);
      return {
        ...state,
        statusAction: action.statusAction,
        categorys: arrayCategory,
      };
    case REMOVE_TO_CART:
      listCart = [...state.carts];
      index = listCart.findIndex((item) => item.product.id === action.item.id);
      if (index !== -1) listCart.splice(index, 1);

      return {
        ...state,
        carts: listCart,
      };
    case ADD_TO_CART:
      listCart = [...state.carts];
      index = listCart.findIndex(
        (item) => item.product.id === action.item.product.id
      );
      if (index !== -1)
        listCart[index] = {
          ...listCart[index],
          quanty: ++listCart[index].quanty,
        };
      else listCart.push(action.item);
      tempTotalPrice = 0;

      listCart.map((item, index) => {
        return (tempTotalPrice += item.product.nowPrice * item.quanty);
      });
      return {
        ...state,
        carts: listCart,
        totalPrice: tempTotalPrice,
      };
    case IN_DE_CREASE:
      listCart = [...state.carts];
      index = listCart.findIndex((item) => item.product.id === action.item.id);
      if (index !== -1) {
        if (action.inDe === "IN")
          listCart[index] = {
            ...listCart[index],
            quanty: ++listCart[index].quanty,
          };
        else
          listCart[index] = {
            ...listCart[index],
            quanty: --listCart[index].quanty,
          };
        if (listCart[index].quanty === 0) listCart.splice(index, 1);
      }
      tempTotalPrice = 0;
      listCart.map((item, index) => {
        return (tempTotalPrice += item.product.nowPrice * item.quanty);
      });
      return {
        ...state,
        carts: listCart,
        totalPrice: tempTotalPrice,
      };

    default:
      return { ...state, statusLogin: -1 };
  }
};
export default reducer;
