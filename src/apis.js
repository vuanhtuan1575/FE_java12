export const BASE_URL = "http://localhost:9090";

export const LOGIN_URL = `${BASE_URL}/api/auth/signin`;

export const makeProductdetailApi = (id) => {
  return `${BASE_URL}/mob/product/${id}/detail`;
};
export const makeProductsApi = (page, query) => {
  return `${BASE_URL}/mob/product/search?p=${page}&q=${query}`;
};
