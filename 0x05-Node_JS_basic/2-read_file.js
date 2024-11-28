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

  const fields = students.map((student) => student[header[header.length - 1]]);
  const uFields = [];
  fields.forEach((field) => {
    if (!uFields.includes(field)) {
      uFields.push(field);
    }
  });
  process.stdout.write(`Number of students: ${students.length}\n`);

  const stdGrpByField = [];
  uFields.forEach((field) => {
    const grp = students.filter(
      (std) => std[header[header.length - 1]] === field,
    );
    stdGrpByField.push({
      name: field,
      students: grp,
    });
  });

  stdGrpByField.forEach((grp) => {
    process.stdout.write(
      `Number of students in ${grp.name}: ${grp.students.length}. `,
    );
    process.stdout.write('List: ');
    let i = 1;
    grp.students.forEach((student) => {
      process.stdout.write(
        `${student[header[0]]}${i === grp.students.length ? '\n' : ', '}`,
      );
      i += 1;
    });
  });
}

module.exports = countStudents;
