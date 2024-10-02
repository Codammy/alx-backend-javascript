export default function createIteratorObject(reportObject) {
  let allDeptEmployee = [];
  for (const dept in reportObject.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(reportObject.allEmployees, dept)) {
      allDeptEmployee = [...allDeptEmployee, ...reportObject.allEmployees[dept]];
    }
  }

  return allDeptEmployee;
}
