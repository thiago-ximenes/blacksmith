import * as productsModel from '../models/productModels';

export async function getAll() {
  const rows = await productsModel.getAll();
  return rows;
}
