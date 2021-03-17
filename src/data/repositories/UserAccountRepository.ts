import { FetchUserAccountSuccessResponse } from '../../domain/entities/UserAccount';
import { IUserAccountRepository } from '../../domain/repositories/IUserAccountRepository';

export class UserAccountRepository implements IUserAccountRepository {
  url = 'data.json';

  async getUserAccount(): Promise<FetchUserAccountSuccessResponse> {
    try {
      const res = await fetch(this.url);
      const jsonData: FetchUserAccountSuccessResponse = await res.json();
      return jsonData;
    } catch (error) {
      throw new Error(error);
    }
  }
}
