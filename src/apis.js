export const BASE_URL = "https://mapi.sendo.vn";

export const makeProductdetailApi = id => {
  return `${BASE_URL}/mob/product/${id}/detail`;
};
export const makeProductsApi = (page, query) => {
  return `${BASE_URL}/mob/product/search?p=${page}&q=${query}`;
};
