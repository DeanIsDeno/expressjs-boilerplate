import { Router } from 'express';
import * as helloController from "../controller/hello.controller";
const router = Router();

// 약관 관리 목록 조회
router.get('/',helloController.getHello);
export default router;
