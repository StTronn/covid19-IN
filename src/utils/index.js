export const format = (number) => {
  return Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    number
  );
};