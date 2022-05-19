import { NextFunction, Request, Response } from 'express';

export function isThereUsername(req: Request, res: Response, next: NextFunction) {
  if (!req.body.username) {
    return res.status(400).json({
      message: '"username" is required', 
    });
  }
  return next();
}

export function isUsernameString(req: Request, res: Response, next: NextFunction) {
  if (typeof req.body.username !== 'string') {
    return res.status(422).json({
      message: '"username" must be a string',
    });
  }
  return next();
}

export function isUsernameMoreThenTwoCharacters(req: Request, res: Response, next: NextFunction) {
  if (req.body.username.length < 3) {
    return res.status(422).json({
      message: '"username" length must be at least 3 characters long',
    });
  }
  return next();
}

export function isThereClass(req: Request, res: Response, next: NextFunction) {
  if (!req.body.classe) {
    return res.status(400).json({
      message: '"classe" is required',
    });
  }
  return next();
}

export function isClassString(req: Request, res: Response, next: NextFunction) {
  if (typeof req.body.classe !== 'string') {
    return res.status(422).json({
      message: '"classe" must be a string',
    });
  }
  return next();
}

export function isClassMoreThenTwoCharacters(req: Request, res: Response, next: NextFunction) {
  if (req.body.classe.length < 3) {
    return res.status(422).json({
      message: '"classe" length must be at least 3 characters long',
    });
  }
  return next();
}

export function isThereLevel(req: Request, res: Response, next: NextFunction) {
  if (!req.body.level && req.body.level !== 0) {
    return res.status(400).json({
      message: '"level" is required',
    });
  }
  return next();
}

export function isLevelNumber(req: Request, res: Response, next: NextFunction) {
  if (typeof req.body.level !== 'number') {
    return res.status(422).json({
      message: '"level" must be a number',
    });
  }
  return next();
}

export function isLevelGreaterThenZero(req: Request, res: Response, next: NextFunction) {
  if (req.body.level < 1) {
    return res.status(422).json({
      message: '"level" must be greater than or equal to 1',
    });
  }
  return next();
}

export function isTherePassword(req: Request, res: Response, next: NextFunction) {
  if (!req.body.password) {
    return res.status(400).json({
      message: '"password" is required',
    });
  }
  return next();
}

export function isPasswordString(req: Request, res: Response, next: NextFunction) {
  if (typeof req.body.password !== 'string') {
    return res.status(422).json({
      message: '"password" must be a string',
    });
  }
  return next();
}

export function isPasswordMoreThenSevenCharacters(req: Request, res: Response, next: NextFunction) {
  if (req.body.password.length < 8) {
    return res.status(422).json({
      message: '"password" length must be at least 8 characters long',
    });
  }
  return next();
}
