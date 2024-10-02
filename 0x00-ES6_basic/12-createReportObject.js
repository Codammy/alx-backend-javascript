export default function createReportObject(employeeList) {
  return {
    allEmployees: { ...employeeList },
    getNumberOfDepartments(employeeList) {
      let count = 0;
      for (const prop in employeeList) {
        if (prop) {
          count += 1;
        }
      }
      return count;
    },
  };
}
