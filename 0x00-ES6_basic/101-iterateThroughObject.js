export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  const iteratorLength = str(reportWithIterator.length - 1);
  for (const idx in reportWithIterator) {
    if (idx) {
      str += (idx === iteratorLength) ? reportWithIterator[idx] : (`${reportWithIterator[idx]} | `);
    }
  }
  return str;
}
