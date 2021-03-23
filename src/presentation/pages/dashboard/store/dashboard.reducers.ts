import { UserAccountStructure } from '../../../../domain/entities/UserAccount';
import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from './dashboard.types';

export interface State {
  loading: boolean;
  userAccount: UserAccountStructure;
}

const initialState: State = {
  loading: false,
  userAccount: {
    userId: '',
    documentNumber: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    session: undefined,
    salary: 0,
    bank: undefined,
    withdrawals: [],
    advances: [],
  },
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        loading: true,
      };

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        userAccount: { ...action.payload },
        loading: false,
      };

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default reducer;
