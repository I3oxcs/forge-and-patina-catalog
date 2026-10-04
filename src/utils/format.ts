/**
 * Small formatters shared by every page that shows wheel data,
 * so a price or size reads the same everywhere on the site.
 */

// 1650 → "€1,650"
const euros = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
});

export function formatPrice(amount: number): string {
  return euros.format(amount);
}

// 17 → "17″"  (″ is the inch mark, a double prime — not a quote)
export function formatSize(diameter: number): string {
  return `${diameter}″`;
}

// [17, 18, 19] → "17″ — 18″ — 19″"
export function formatSizes(diameters: number[]): string {
  return diameters.map(formatSize).join(' — ');
}

// "The Halden 71" → "Halden 71"   ("Each Halden 71 is assembled…")
export function shortName(name: string): string {
  return name.replace(/^The /, '');
}
