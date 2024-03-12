export const getDefaultValue = (type = '') => {
  if (type === 'string' || type === '') return '';
  if (type === 'array') return [];
  if (type === 'number') return 0;
};
