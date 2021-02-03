export const format = (number) => {
  return Intl.NumberFormat("en-IN", { }).format(
    number
  );
};

export const percent = (total, delta) =>parseFloat( (delta / total) * 100).toFixed(2);