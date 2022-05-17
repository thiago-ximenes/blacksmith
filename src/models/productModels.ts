import { ResultSetHeader } from 'mysql2';
import connection from './connection';

export async function getAll() {
  const [rows] = await connection.execute('SELECT * FROM Products');
  return rows;
}

export async function create(name: string, amount: string) {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  return {
    id: insertId,
    name,
    amount,
  };
}