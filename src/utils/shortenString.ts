export const shortenString: (str: string, maxLen: number) => string = (
  str,
  maxLen = 20
) => {
  if (!str) return "";
  if (str?.length <= maxLen) return str;
  return str?.substr(0, str?.lastIndexOf(" ", maxLen)) + "…";
};
