import router from "#api/employees";
import express from "express";
const app = express();
export default app;

app.get('/', (req, res, next) => {
  res.send("Welcome to the Fullstack Employees API.")
})

app.use('/employees', router);