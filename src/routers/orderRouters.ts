import { Router } from 'express';
import orderControllers from '../controllers/orderControllers';

const router = Router();

router.get(
  '/',
  orderControllers,
);

export default router;