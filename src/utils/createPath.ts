export const createPath = (
  path: string,
  params: Record<string, string | number>
) => {
  let newPath = path;
  Object.entries(params).forEach(([key, value]) => {
    newPath = newPath.replace(`:${key}`, value.toString());
  });
  return newPath;
};
