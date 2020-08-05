import {
  FETCH_JOBS_POSTED_SUCCESS,
  FETCH_JOBS_POSTED_FAIL
} from "../actions/types";

const initialState = {
  data: [],
  isFetchingData: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_JOBS_POSTED_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isFetchingData: false
      });
    case FETCH_JOBS_POSTED_FAIL:
      return null;
    default:
      return state;
  }
}
