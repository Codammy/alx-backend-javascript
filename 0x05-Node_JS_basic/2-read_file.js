const fs = require('fs');

function csvToObj(data, header) {
  return data.map((std) => {
    const obj = {};
    const tmp = std.split(',');
    let i = 0;
    header.forEach((h) => {
      obj[h] = tmp[i];
      i += 1;
    });
    return obj;
  });
}

function countStudents(path) {
  let students = [];
  let header;
  try {
    let data = fs.readFileSync(path, 'utf8').trim('\n');
    data = data.split('\n');
    header = data[0].split(',');
    students = csvToObj(data.splice(1), header);
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  let fields = students.map((student) => student[header[header.length - 1]]);
  console.log(fields);
  console.log(`Number of students: ${students.length}`);
  //   students.for;

  console.log(students);
}

countStudents('./database.csv');
module.exports = countStudents;
