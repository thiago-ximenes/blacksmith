import { Router } from 'express';
import * as productControllers from '../controllers/productControllers';
import * as productMiddlewares from '../middlewares/productMiddlewares';

const router = Router();

router.get(
  '/',
  productControllers.getAll,
);

router.post(
  '/',
  productMiddlewares.isThereName,
  productMiddlewares.isNameString,
  productMiddlewares.nameHasMoreThenTwoCharacters,
  productMiddlewares.isThereAmount,
  productMiddlewares.isAmountString,
  productMiddlewares.amountHasMoreThenTwoCharacters,
  productControllers.create,
);

export default router;
