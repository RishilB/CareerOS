const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string) {
  if (!basePath || path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  if (path.startsWith(basePath + "/") || path === basePath) {
    return path;
  }

  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
