import { FetchUserAccountSuccessResponse } from '../entities/UserAccount';

export interface IUserAccountRepository {
  getUserAccount(): Promise<FetchUserAccountSuccessResponse>;
}
