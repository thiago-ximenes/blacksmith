import { Router } from 'express';
import userControllers from '../controllers/userControllers';
import * as userMiddlewares from '../middlewares/userMiddlewares';

const router = Router();

router.post(
  '/',
  userMiddlewares.isThereUsername,
  userMiddlewares.isUsernameString,
  userMiddlewares.isUsernameMoreThenTwoCharacters,
  userMiddlewares.isThereClass,
  userMiddlewares.isClassString,
  userMiddlewares.isClassMoreThenTwoCharacters,
  userMiddlewares.isThereLevel,
  userMiddlewares.isLevelNumber,
  userMiddlewares.isLevelGreaterThenZero,
  userMiddlewares.isTherePassword,
  userMiddlewares.isPasswordString,
  userMiddlewares.isPasswordMoreThenSevenCharacters,
  userControllers,
);

export default router;