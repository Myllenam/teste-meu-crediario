import express from "express";
import { createServer as createServerHttp } from "http";
import cors from "cors";

import expressRoutes from "./routes/routes";

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.static(`${__dirname}/public`));


app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const httpServer = createServerHttp(app);

expressRoutes(app);

export { httpServer, app };