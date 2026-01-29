import router from "#api/employees";
import express from "express";
const app = express();
export default app;

app.get('/', (req, res, next) => {
  res.send("Welcome to the Fullstack Employees API.")
})

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.use('/employees', router);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("It's not you, it's me. Working to restore.")
})