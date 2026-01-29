import db from "../client.js"

/** @returns the employee created according to the provided details */
export async function createEmployee({ name, birthday, salary }) {
  const sql = `
  INSERT INTO employees (name, birthday, salary)
  VALUES ('${name}', '${birthday}', ${salary})
  RETURNING *`;

  const { rows: [employee] } = await db.query(sql);
  
  return employee;
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  const sql = `
  SELECT * FROM employees`;

  const { rows: employees } = await db.query(sql);

  return employees;
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  const sql = `
  SELECT * FROM employees
  WHERE "id" = ${id}`;

  const { rows: [employee] } = await db.query(sql);

  return employee;
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  const updateKeys = [];

  if (name) updateKeys.push(`name = '${name}'`);
  if (birthday) updateKeys.push(`birthday = ${birthday}`);
  if (name) updateKeys.push(`salary = ${salary}`);

  const sql = `
    UPDATE employees
    SET ${updateKeys.join(', ')}
    WHERE employees.id = ${id}
    RETURNING *
  `;

  const { rows: [updatedEmployee] } = await db.query(sql);

  return updatedEmployee;

}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  // TODO
}
