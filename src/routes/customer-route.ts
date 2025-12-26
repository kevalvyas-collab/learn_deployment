import { Router } from 'express';
import customerController from '../controllers/customer-controller';

const router = Router();


router.post("/register", customerController.register);


export default router;