export const format = (number) => {
  return Intl.NumberFormat("en-IN", {}).format(number);
};

export const percent = (total, delta) =>
  parseFloat((delta / total) * 100).toFixed(2);

export const getValueFromKey = (list, key) => {
  return Object.values(list.filter((e) => Object.keys(e)[0] === key)[0])[0];
};
