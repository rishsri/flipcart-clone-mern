import express from "express";
import dotenv from "dotenv";

//Components
import Connection from "./database/db.js";
import DefaultData from "./default.js"

const app = express();

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const PORT = 8000;

Connection(username, password);
app.listen(PORT, () => console.log(`Server is successfully on PORT ${PORT}`));


//data to database
DefaultData();
