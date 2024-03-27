import { Router } from 'express';
import helloRouter from "./router/hello.router";


const router = Router();

router.use('/hello',helloRouter);

export default router;
