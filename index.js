import express from "express";
import { Connection } from "./database/db.js";
import cors from "cors";
import bodyParser from "body-parser";

import Route from "./routes/route.js";

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", Route);

Connection();
const PORT = 8000; 

app.listen(PORT, () => console.log("listening on port " + PORT));
