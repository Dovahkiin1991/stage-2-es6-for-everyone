import { callApi } from '../helpers/apiHelper';

class FighterService {
  async getFighters() {
    try {
      const endpoint = 'fighters.json';
      const apiResult = await callApi(endpoint, 'GET');

      return apiResult;
    } catch (error) {
      throw error;
    }
  }

  async getFighterInfo(id) {
    // todo: implement this method
    try {
      const endpoint = `details/fighter/${id}.json`;
      const apiResult = await callApi(endpoint, 'GET');

      return apiResult;
    } catch (error) {
      throw error;
    }
    // endpoint - `details/fighter/${id}.json`;
  }
}

export const fighterService = new FighterService();
