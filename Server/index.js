import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

//Components
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Routes from "./routes/routes.js";

const app = express();

app.use(
  bodyParser.json({
    extended: true,
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use("/", Routes);

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const PORT = 8000;

Connection(username, password);
app.listen(PORT, () => console.log(`Server is successfully on PORT ${PORT}`));

//data to database
DefaultData();
