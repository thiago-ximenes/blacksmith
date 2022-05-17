import { Router } from 'express';
import * as productControllers from '../controllers/productControllers';

const router = Router();

router.get(
  '/',
  productControllers.getAll,
);

export default router;
