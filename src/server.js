import express from "express";
import configViewEngine from "./config/viewEngnine";
import initWebRoutes from "./routes/web";
require("dotenv").config();
import bodyParser from 'body-parser';
import connection from "./config/connectDB";

// const app = express();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const PORT = process.env.PORT || 8080;
//test connection db
connection();

//config view engine
configViewEngine(app);

//init web routes
initWebRoutes(app);


app.listen(PORT, () => {
    console.log("=== JWT Backend is running on the port = " + PORT);
});