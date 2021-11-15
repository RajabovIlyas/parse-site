import dotenv from 'dotenv';
import {createExpressServer, useContainer} from "routing-controllers";
import * as path from "path";
import {Container} from "typedi";
import {middleware} from "express-http-context";
import {ParseController} from "./controllers/parse/parse-controller";

dotenv.config();

const port = process.env.PORT;

useContainer(Container);

const app = createExpressServer({
    routePrefix: '/api',
    cors: true,
    controllers: [ParseController],// we specify controllers we want to use
    middlewares: [middleware],
});


app.listen(port, () => console.log(`Running on port ${port}`));

