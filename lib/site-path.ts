export const BASE_PATH = "/mini-soundsystem-home";

export function withBasePath(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${BASE_PATH}${path}`;
}