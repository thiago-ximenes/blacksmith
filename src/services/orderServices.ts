import * as orderModels from '../models/orderModels';

interface Order {
  id: number;
  userId: number;
}

interface Products {
  id: number;
  name: string;
  amount: string;
  orderId: number;
}

export default async function getOrders() {
  try {
    const callOrders = await orderModels.getOrders();
    const orders = callOrders as Order[];
    const callProducts = await orderModels.getProducts();
    const products = callProducts as Products[];
    const result = orders.map((order) => ({
      id: order.id,
      userId: order.userId,
      productsIds: products.filter((product) => product.orderId === order.id)
        .map((product) => product.id),
    }));
    return result;
  } catch (error) {
    return error;
  }
}