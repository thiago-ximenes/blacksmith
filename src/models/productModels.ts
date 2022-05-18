import { ResultSetHeader } from 'mysql2';
import connection from './connection';

export async function getAll() {
  try {
    const [rows] = await connection.execute('SELECT * FROM Trybesmith.Products');
    return rows;
  } catch (error) {
    console.error(error);
  }
}

export async function create(name: string, amount: string) {
  try {
    const [{ insertId }] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return {
      id: insertId,
      name,
      amount,
    };
  } catch (error) {
    return error;
  }
}