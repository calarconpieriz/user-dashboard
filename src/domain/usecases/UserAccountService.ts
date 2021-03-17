import { FetchUserAccountSuccessResponse } from '../entities/UserAccount';
import { UserAccountRepository } from '../../data/repositories/UserAccountRepository';

export interface IUserAccountService {
  getUserAccount(): Promise<FetchUserAccountSuccessResponse>;
}

export class UserAccountService implements IUserAccountService {
  constructor(private userAccountRepo: UserAccountRepository) {}

  async getUserAccount(): Promise<FetchUserAccountSuccessResponse> {
    return this.userAccountRepo.getUserAccount();
  }
}
