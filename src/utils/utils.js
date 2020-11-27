const formatPrice = (value) => {
  return value.toFixed(2).toString().replace('.', ',');
};

export { formatPrice };
