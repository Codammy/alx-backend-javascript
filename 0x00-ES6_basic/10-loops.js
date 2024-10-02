export default function appendToEachArrayValue(array, appendString) {
  for (const val of array) {
    array[array.indexOf(val)] = appendString + val;
  }
  
  return array;
}
