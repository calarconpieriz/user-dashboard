import { FetchUserAccountSuccessResponse } from '../entities/UserAccount';
import { UserAccountRepository } from '../repositories/UserAccountRepository';
export class UserAccountService implements UserAccountRepository {
  constructor(private userAccountRepository: UserAccountRepository) {}

  public async getUserAccount(): Promise<FetchUserAccountSuccessResponse> {
    const response = await this.userAccountRepository.getUserAccount();
    return {
      ...response,
    };
  }
}
