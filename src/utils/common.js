export const sumToItems = (arr) => {
  return arr.reduce((prev, curr) => prev + curr, 0)
}

export const buildUrl = (url, params) => {

  Object.entries(params).forEach(([key, value], index) => {
    const sign = !index ? "?" : "&";
    url += `${sign}${key}=${value}`;
  });

  return url;
};