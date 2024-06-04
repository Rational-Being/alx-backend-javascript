// this is script reads a file synchronusly with nodejs

const fs = require('fs');

function countStudents(file) {
  try {
    const input = fs.readFileSync(file, 'utf-8');
    const lines = input.toString().split('\n');
    const header = lines[0].split(',');
    const students = [];

    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i].split(',');
      if (line.length === header.length) {
        const student = {};

        for (let j = 0; j < header.length; j += 1) {
          student[header[j]] = line[j];
        }
        students.push(student);
      }
    }

    console.log(`Number of students: ${students.length}`);

    const csStudents = students.filter((student) => student.field === 'CS').map((student) => student.firstname);
    const sweStudents = students.filter((student) => student.field === 'SWE').map((student) => student.firstname);

    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);

    // const counts = {};
    // const lists = {};

    // for (const student of students) {
    //   if (!counts[student.field]) {
    //     counts[student.field] = 0;
    //     lists[student.field] = [];
    //   }
    //   counts[student.field] += 1;
    //   lists[student.field].push(student.firstname);
    // }

    // for (const field in counts) {
    //   // if (Object.hasOwn(counts, field)) {
    // console.log(` ${field}. ${counts[field]}. List: ${lists[field].join(', ')}`);
    //   // }
    // }
  } catch (error) {
    console.error('Cannot load the batabase');
  }
}

module.exports = countStudents;
