export default function getListStudentIds(array) {
  try {
    return array.map((obj) => obj.id);
  } catch {
    return [];
  }
}
