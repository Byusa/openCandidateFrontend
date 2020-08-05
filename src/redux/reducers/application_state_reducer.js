import { GET_APPLICANTS_SUCCESS, GET_APPLICANTS_FAIL } from "../actions/types";

const initialState = {
  applicants: [],
  shortListed: [],
  loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_APPLICANTS_SUCCESS:
      return Object.assign({}, state, {
        applicants: action.payload,
        loading: false
      });
    case GET_APPLICANTS_FAIL:
      return null;
    default:
      return state;
  }
}
