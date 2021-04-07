import axios from 'axios';
import { FetchUserAccountSuccessResponse } from '../../domain/entities/UserAccount';
import { UserAccountRepository } from '../../domain/repositories/UserAccountRepository';

export class UserAccountApi implements UserAccountRepository {
  url = '/';
  async getUserAccount(): Promise<FetchUserAccountSuccessResponse> {
    try {
      const res = await axios.get(this.url);
      const jsonData: FetchUserAccountSuccessResponse = await res.data;
      return jsonData;
    } catch (error) {
      throw new Error(error);
    }
  }
}
