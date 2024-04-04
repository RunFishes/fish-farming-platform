export const getDefaultValue = (type = '') => {
  if (type === 'string' || type === '') return '';
  if (type === 'array') return [];
  if (type === 'number') return 0;
};

export const copyValue = (obj) => {
  console.log(obj);
  if (Array.isArray(obj)) return obj.map((item) => copyValue(item));
  if (typeof obj === 'object' && obj) {
    return Object.assign({}, obj);
  }
  return obj;
};
