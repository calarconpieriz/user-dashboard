import { FetchUserAccountSuccessResponse } from '../entities/UserAccount';

export interface UserAccountRepository {
  getUserAccount(): Promise<FetchUserAccountSuccessResponse>;
}
