export default function createIteratorObject(reportObject) {
  allDeptEmployee = []
  for (const dept in reportObject) {
    if (Object.prototype.hasOwnProperty.call(reportObject, dept)) {
        allDeptEmployee = [...allDeptEmployee, ...dept.employees]
    }
  }

  return allDeptEmployee
}