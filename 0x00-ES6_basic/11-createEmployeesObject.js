export default function createEmployeesObject(departmentName, employees) {
  const employed = {
    departmentName,
    employees,
  };

  // return `${departmentName}: ${...employees}';
  return {
    [employed.departmentName]: employees,
  };
}
