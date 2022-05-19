import { ResultSetHeader } from 'mysql2';
import connection from './connection';

async function create(username: string, classe: string, level: number, password: string) {
  const token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.';
  const token2 = 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.';
  const token3 = 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

  try {
    await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return {
      token: token1 + token2 + token3,
    };
  } catch (error) {
    return error;
  }
}

export default create;