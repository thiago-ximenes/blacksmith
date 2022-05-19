import userModelsCreate from '../models/userModels';

async function create(username: string, classe: string, level: number, password: string) {
  try {
    const rows = await userModelsCreate(username, classe, level, password);
    return rows;
  } catch (error) {
    return error;
  }
}

export default create;