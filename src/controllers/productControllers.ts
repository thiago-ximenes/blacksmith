import { Request, Response } from 'express';
import * as productServices from '../services/productServices';

export async function getAll(_req: Request, res: Response) {
  try {
    const result = await productServices.getAll();
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
  }
}

export async function create(req: Request, res: Response) {
  try {
    const { name, amount } = req.body;
    console.log(typeof amount);
    const result = await productServices.create(name, amount);
    return res.status(201).json(result);
  } catch (error) {
    console.error(error);
  }
}
