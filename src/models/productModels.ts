import connection from './connection';

export async function getAll() {
  const [rows] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return rows;
}
