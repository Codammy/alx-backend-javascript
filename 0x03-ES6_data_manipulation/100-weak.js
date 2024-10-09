export const weakMap = new WeakMap();
let count = 0;
export function queryAPI(endpoint) {
  count += 1;
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  if (count < 5) weakMap.set(endpoint, count);
}
