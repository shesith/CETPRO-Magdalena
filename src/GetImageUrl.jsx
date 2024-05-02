export function GetImageUrl(name) {
  return new URL(`./assets/${name}.png`, import.meta.url).href;
}
