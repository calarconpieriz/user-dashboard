import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from './dashboard.types';
import { UserAccountService } from '../../../../domain/usecases/UserAccountService';
import { UserAccountApi } from '../../../../data/user-account/UserAccountApi';

export const fetchData = async (dispatch: any) => {
  dispatch({ type: FETCH_DATA });
  try {
    const userAccountApi = new UserAccountApi();
    const userAccountService = new UserAccountService(userAccountApi);
    const response = await userAccountService.getUserAccount();
    dispatch({ type: FETCH_DATA_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAILURE, error });
  }
};
