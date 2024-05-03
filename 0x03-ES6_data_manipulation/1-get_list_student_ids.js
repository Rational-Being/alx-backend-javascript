export default function getListStudentIds(studentArray) {
  if (studentArray instanceof Array) {
    return studentArray.map((student) => student.id);
  }
  return [];
}
