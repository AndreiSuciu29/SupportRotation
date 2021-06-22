import bodyParser from "body-parser";
import express from "express";
import logger from "./helpers/logger";
import router from "./routes/router";

const app = express();
app.use(bodyParser.json());
app.use(logger);
app.use(router);

export default app;
