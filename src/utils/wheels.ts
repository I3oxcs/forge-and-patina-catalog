import { getCollection } from 'astro:content';

/**
 * Every wheel, oldest first (Solitude 58 → Deutz 83).
 *
 * getCollection() returns entries in no guaranteed order, so every
 * page that lists wheels goes through this instead — the catalog,
 * the home page and the heritage timeline all agree on the order.
 */
export async function getWheels() {
  const wheels = await getCollection('wheels');
  return wheels.sort((a, b) => a.data.year - b.data.year);
}
