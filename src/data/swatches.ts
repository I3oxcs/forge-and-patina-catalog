/**
 * FINISH SWATCHES
 * Every finish a wheel can be ordered in, as a CSS background.
 * The swatches are gradients, not photos — no images required.
 *
 * A wheel's data refers to a swatch by its key (e.g. 'polished-bronze').
 * The content schema only accepts keys listed here, so a typo in a
 * wheel file stops the build instead of rendering a blank swatch.
 */
export const swatches = {
  // Warm diagonal gradient simulates the metallic sheen
  'polished-bronze':
    'linear-gradient(135deg, #D4A45A 0%, #B8824A 38%, #9E6E3A 65%, #C4924A 100%)',

  // Fine vertical stripes simulate a brushed grain
  'brushed-magnesium':
    'repeating-linear-gradient(90deg, #ABABAB 0px, #9A9390 4px, #B2B0AE 8px, #9A9390 12px)',

  // Uncoated magnesium: dull, slightly golden grey
  'raw-magnesium':
    'linear-gradient(135deg, #B0A794 0%, #8C8475 45%, #9E9584 70%, #B5AC98 100%)',

  // 1950s German racing silver: cool and even
  'racing-silver':
    'linear-gradient(135deg, #DCDCD9 0%, #B9BAB8 40%, #9FA1A0 70%, #CFCFCC 100%)',

  // Dark spoke valleys with a polished face catching the light
  'anthracite-polished':
    'linear-gradient(135deg, #2E2C2A 0%, #2E2C2A 40%, #D8D6D2 47%, #A9A7A3 53%, #2E2C2A 60%, #2E2C2A 100%)',

  // Gloss ink with one crisp diamond-cut band
  'ink-machined':
    'linear-gradient(135deg, #1C1814 0%, #1C1814 54%, #D2CEC8 54%, #B6B1AA 62%, #1C1814 62%, #1C1814 100%)',
};

export type SwatchKey = keyof typeof swatches;

// The list of keys, in the shape the content schema's z.enum() expects.
export const swatchKeys = Object.keys(swatches) as [SwatchKey, ...SwatchKey[]];
