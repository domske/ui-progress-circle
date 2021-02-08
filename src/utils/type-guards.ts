export const isNumber = (input: unknown): input is number => {
  return typeof input === 'number';
};

export const isString = (input: unknown): input is string => {
  return typeof input === 'string';
};

export const isBoolean = (input: unknown): input is boolean => {
  return typeof input === 'boolean';
};

export const isUndefined = (input: unknown): input is undefined => {
  return typeof input === 'undefined';
};

export const isFunction = (input: unknown): boolean => {
  return typeof input === 'function';
};

export const isNullOrUndefined = (input: unknown): boolean => {
  return input === null || input === undefined;
};

export const isSafeNumber = (input: unknown): input is number => {
  return typeof input === 'number' && !isNaN(input) && isFinite(input);
};
