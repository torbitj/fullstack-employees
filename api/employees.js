import { getEmployees } from "#db/queries/employees";
import express from "express";
const router = express.Router();
export default router;

router.get('/', async (req, res, next) => {
  res.send(await getEmployees())
})
