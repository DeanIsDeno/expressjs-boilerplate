import express, {NextFunction, Request, Response} from 'express';
import { HttpError } from 'http-errors';
import api_router from "./src/api_router";

class App {
    app: express.Application;

    constructor() {
        this.app = express();
    }
}

const app = new App().app;

app.use('/',api_router);

app.listen(8080, () => {
    console.log('Started server with 8080');
});

// error handler
app.use((err: HttpError, req: Request, res: Response, _next: NextFunction) => {
    const status = err.status;

    return res
        .status(status || 500)
        .json({ status: status, message: err.message || err.toString(), path: req.originalUrl });
});