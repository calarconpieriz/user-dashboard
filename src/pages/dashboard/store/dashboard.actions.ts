import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from './dashboard.types';
import { UserAccountService } from '../../../domain/usecases/UserAccountService';
import { UserAccountRepository } from '../../../data/repositories/UserAccountRepository';

export const fetchData = async (dispatch: any) => {
  dispatch({ type: FETCH_DATA });
  try {
    const userAccountRepo = new UserAccountRepository();
    const userAccountService = new UserAccountService(userAccountRepo);
    const response = await userAccountService.getUserAccount();
    dispatch({ type: FETCH_DATA_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAILURE, error });
  }
};
