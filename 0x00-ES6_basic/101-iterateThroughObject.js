export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  const iteratorLength = (reportWithIterator.length - 1).toString();
  for (const idx in reportWithIterator) {
    if (idx) {
      str += (idx === iteratorLength) ? reportWithIterator[idx] : (`${reportWithIterator[idx]} | `);
    }
  }
  return str;
}
