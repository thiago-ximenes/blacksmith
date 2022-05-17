import { NextFunction, Request, Response } from 'express';

export function isThereName(req: Request, res: Response, next: NextFunction) {
  if (!req.body.name) {
    return res.status(400).json({
      message: '"name" is required',
    });
  }
  next();
}

export function isNameString(req: Request, res: Response, next: NextFunction) {
  if (typeof req.body.name !== 'string') {
    return res.status(422).json({
      message: '"name" must be a string',
    });
  }
  next();
}

export function nameHasMoreThenTwoCharacters(req: Request, res: Response, next: NextFunction) {
  if (req.body.name.length < 3) {
    return res.status(422).json({
      message: '"name" length must be at least 3 characters long',
    });
  }
  next();
}

export function isThereAmount(req: Request, res: Response, next: NextFunction) {
  if (!req.body.amount) {
    return res.status(400).json({
      message: '"amount" is required',
    });
  }
  next();
}

export function isAmountString(req: Request, res: Response, next: NextFunction) {
  if (typeof req.body.amount !== 'string') {
    return res.status(422).json({
      message: '"amount" must be a string',
    });
  }
  next();
}

export function amountHasMoreThenTwoCharacters(req: Request, res: Response, next: NextFunction) {
  if (req.body.amount.length < 3) {
    return res.status(422).json({
      message: '"amount" length must be at least 3 characters long',
    });
  }
  next();
}