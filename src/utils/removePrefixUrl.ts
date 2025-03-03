export const removeUrlPrefix = (text: string): string => {
  return text.replace(/^https?\:\/\//i, "")
};