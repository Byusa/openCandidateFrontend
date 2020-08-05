import { USER_CREATE_SUCCESS, USER_CREATE_FAIL } from "../actions/types";
import { NavigationActions } from "react-navigation";
import { REHYDRATE } from "redux-persist/constants";

const initialState = {
  firstName: "",
  lastName: "",
  imageUrl: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REHYDRATE:
      return { ...state };
    case USER_CREATE_SUCCESS:
      return Object.assign({}, state, {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      });
    case USER_CREATE_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
}
