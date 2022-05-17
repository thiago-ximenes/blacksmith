import * as productsModel from '../models/productModels';

export async function getAll() {
  const rows = await productsModel.getAll();
  return rows;
}

export async function create(name: string, amount: string) {
  const rows = await productsModel.create(name, amount);
  return rows;
}
