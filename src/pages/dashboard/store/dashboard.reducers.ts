import { UserAccount } from '../../../domain/entities/UserAccount';
import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from './dashboard.types';

interface State {
  loading: boolean;
  dashboard: {
    userAccount: any;
  };
}

const initialState: State = {
  loading: false,
  dashboard: {
    userAccount: null,
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
        ...action.payload,
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
