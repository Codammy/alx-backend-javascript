export default function updateStudentGradeByCity(students, city, newGrades) {
  const studs = students.filter((student) => student.location === city);
  return studs.map((student) => {
    const gradeObj = newGrades.find((grade) => student.id === grade.studentId);
    const newStudent = { ...student };
    newStudent.grade = !gradeObj || !gradeObj.grade ? 'N/A' : gradeObj.grade;
    return newStudent;
  });
}
