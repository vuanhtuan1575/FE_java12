export const BASE_URL = "http://localhost:9090";

export const LOGIN_URL = `${BASE_URL}/api/auth/signin`;
export const UPLOAD_MULTIPLE_URL = `${BASE_URL}/uploadMultipleFiles`;
export const UPLOAD_SIGNLE_URL = `${BASE_URL}/uploadFile`;
export const CREATE_CATEGORY_URL = `${BASE_URL}/admin/category/create`;

export const FIND_ALL_CATEGORY_URL = `${BASE_URL}/category`;

export const disableCategoryById = (id) => {
  return `${BASE_URL}/admin/category/disable/${id}`;
};
export const makeProductsApi = (page, query) => {
  return `${BASE_URL}/mob/product/search?p=${page}&q=${query}`;
};
