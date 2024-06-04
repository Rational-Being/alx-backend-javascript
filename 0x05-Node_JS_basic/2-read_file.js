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

    const counts = {};
    const lists = {};

    for (const student of students) {
      if (!counts[student.field]) {
        counts[student.field] = 0;
        lists[student.field] = [];
      }
      counts[student.field] += 1;
      lists[student.field].push(student.firstname);
    }
    
    // console.log(counts)
    // console.log(`Number of students in ${counts[0]}. ${counts[0]}. List: ${lists[0].join(', ')}`);
    // console.log(`Number of students in ${counts[1]}. ${counts[1]}. List: ${lists[1].join(', ')}`);

    for (const field in counts) {
      // if (Object.hasOwn(counts, field)) {
      console.log(`Number of students in ${field}. ${counts[field]}. List: ${lists[field].join(', ')}`);
      // }
    }
  } catch (error) {
    console.error('Cannot load the batabase');
  }
}

module.exports = countStudents;
