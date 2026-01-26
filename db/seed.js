import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  for (let employeeNum = 1; employeeNum <= 20; employeeNum++) {
    const employee = {
      name: "Employee",
      birthday: "1990-02-10",
      salary: 120000
    }
    await createEmployee(employee)
  }
}
