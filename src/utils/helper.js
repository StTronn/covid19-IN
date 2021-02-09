export const format = (number) => {
  return Intl.NumberFormat("en-IN", {}).format(number);
};

export const percent = (total, delta) =>
  parseFloat((delta / total) * 100).toFixed(2);

export const debounce = (func, wait, immediate) => {
  var timeout;

  return function () {
    var context = this,
      args = arguments;

    var callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(function () {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    }, wait);

    if (callNow) func.apply(context, args);
  };
};
