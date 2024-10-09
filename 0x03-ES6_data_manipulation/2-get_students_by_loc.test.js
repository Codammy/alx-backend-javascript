import getListStudents from './0-get_list_students';
import getStudentsByLocation from './2-get_students_by_loc';

test('getStudentsByLocation is implemented correctly', () => {
  const students = getListStudents();

  expect(getStudentsByLocation(students, 'San Francisco')).toStrictEqual([
    { firstName: 'Guillaume', id: 1, location: 'San Francisco' },
    { firstName: 'Serena', id: 5, location: 'San Francisco' },
  ]);

  expect(getStudentsByLocation(students, 'Columbia')).toStrictEqual([
    { firstName: 'James', id: 2, location: 'Columbia' },
  ]);

  expect(getStudentsByLocation(students, '')).toStrictEqual([]);
});
