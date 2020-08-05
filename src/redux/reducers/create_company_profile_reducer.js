import {
  CREATE_COMPANY_PROFILE_SUCESS,
  CREATE_COMPANY_PROFILE_FAIL
} from "../actions/types";
import { REHYDRATE } from "redux-persist/constants";

const initialState = {
  companyName: "",
  lat: "",
  long: "",
  address: "",
  website: "",
  phone: "",
  placeID: "",
  city: "",
  admistratingLevel: "",
  photo: [],
  weekly_hours: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REHYDRATE:
      return state;
    case CREATE_COMPANY_PROFILE_SUCESS:
      return Object.assign({}, state, {
        companyName: action.payload.name,
        lat: action.payload.latitude,
        long: action.payload.longitude,
        address: action.payload.address,
        website: action.payload.website,
        phone: action.payload.phoneNumber,
        placeID: action.payload.placeID,
        weekly_hours: action.payload.opening_hours.weekday_text,
        photo: action.payload.photo
        //city: action.payload.addressComponents.locality
        // admistratingLevel:
        //   action.payload.addressComponents.administrative_area_level_1
      });
    default:
      return state;
  }
}
