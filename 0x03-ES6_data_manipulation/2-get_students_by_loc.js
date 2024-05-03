export default function getStudentsByLocation(studentArray, city) {
    const arrayOfObj = studentArray.filter((_) => _.location === city);
    return arrayOfObj;
}