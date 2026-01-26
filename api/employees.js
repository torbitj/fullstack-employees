import { getEmployee, getEmployees } from "#db/queries/employees";
import express from "express";
const router = express.Router();
export default router;

router.get('/', async (req, res, next) => {
  res.send(await getEmployees())
})

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  let isNumber = true;
  console.log("ID ", id)
  for (let i = 0; i < id.length; i++) {
    if (isNaN(id[i])) isNumber = false;
  }
  const idNum = Number(id);
  if (idNum < 0 || !isNumber) res.status(400).send("Id must be a positive integer");

  const foundEmployee = await getEmployee(id);
  if (!foundEmployee) res.status(404).send("Employee not found")
  
  res.send(foundEmployee);
})
