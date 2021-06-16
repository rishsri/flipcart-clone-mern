import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

//Components
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Routes from "./routes/routes.js";

dotenv.config();
const app = express();

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`Server is successfully on PORT ${PORT}`));


//data to database
DefaultData();


app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);









