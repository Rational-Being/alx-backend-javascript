export default function getStudumentIdsSum(studentArray) {
  const studentsId = studentArray.reduce((accumulator, currentStudents) => accumulator + currentStudents.id, 0);
  return studentsId;
}
