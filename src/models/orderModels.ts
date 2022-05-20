import connection from './connection';

export async function getOrders() {
  try {
    const [rows] = await connection.execute(
      'SELECT * FROM Trybesmith.Orders',
    );
    return rows;
  } catch (error) {
    console.log(error);
  }
}

export async function getProducts() {
  try {
    const [rows] = await connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    return rows;
  } catch (error) {
    return error;
  }
}