import { Request, Response } from 'express';
import orderServices from '../services/orderServices';

export default async function getOrders(_req: Request, res: Response) {
  try {
    const result = await orderServices();
    return res.status(200).json(result);
  } catch (error) {
    return error;
  }
}