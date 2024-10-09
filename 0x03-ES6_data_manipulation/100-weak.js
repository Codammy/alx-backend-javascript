export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (!weakMap.has(0)) {
    weakMap.set(0, endpoint);
  }
  throw new Error('Endpoint load is high');
}
