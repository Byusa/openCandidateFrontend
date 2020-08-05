import {
  FETCH_JOBS_USER_SUCCESS,
  FETCH_JOBS_USER_FAIL,
  PAGINATE_FETCH_USER_JOBS,
  UPDATE_LAST_DOCUMENT_FOR_PAGINATION,
  IS_FETCHING
} from "../actions/types";

const initialState = {
  data: [],
  isFetchingData: true,
  lastVisible: "",
  refreshing: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_JOBS_USER_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isFetchingData: false
      });
    case UPDATE_LAST_DOCUMENT_FOR_PAGINATION:
      return Object.assign({}, state, {
        lastVisible: action.payload
      });
    //
    case PAGINATE_FETCH_USER_JOBS:
      // return Object.assign({}, state, {
      //   data: action.payload.concat(state.data)
      // });
      return { ...state, ...action.payload };
    case IS_FETCHING: {
      return { ...state, isFetchingData: true };
    }
    default:
      return state;
  }
}
