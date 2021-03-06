import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from "../actions/types";
import { REHYDRATE } from "redux-persist/constants";
import { NavigationActions } from "react-navigation";

export default function(state = {}, action) {
  switch (action.type) {
    case REHYDRATE:
      return state;
    case FACEBOOK_LOGIN_SUCCESS:
      return { token: action.payload };
    case FACEBOOK_LOGIN_FAIL:
      return { token: null };
    default:
      return state;
  }
}
