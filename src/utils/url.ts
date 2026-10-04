/**
 * Builds a link to a page or file on this site.
 *
 * On GitHub Pages the site lives in a sub-folder
 * (username.github.io/forge-and-patina-catalog/), so a plain "/heritage/"
 * link would point outside it. Astro exposes that sub-folder as
 * import.meta.env.BASE_URL — "/" locally, "/forge-and-patina-catalog"
 * once we set `base` in astro.config.mjs. Routing every link through this
 * helper means none of them need to change when we deploy.
 *
 *   url('')          → "/"           (or "/forge-and-patina-catalog/")
 *   url('heritage/') → "/heritage/"  (or "/forge-and-patina-catalog/heritage/")
 */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
