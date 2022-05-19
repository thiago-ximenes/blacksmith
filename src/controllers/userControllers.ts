import { Request, Response } from 'express';
import userServicesCreate from '../services/userServices';

export default async (req: Request, res: Response) => {
  try {
    const { username, classe, level, password } = req.body;
    const rows = await userServicesCreate(username, classe, level, password);
    return res.status(201).json(rows);
  } catch (error) {
    console.error(error);
  }
};