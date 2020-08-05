import { combineReducers } from "redux";
import auth from "./auth_reducers";
import fetch from "./jobs_fetch_reducers";
import create_profile from "./create_company_profile_reducer";
import nav from "./nav_reducer";
import create_user from "./create_user_reducer";
import getApplicants from "./application_state_reducer";
import user_job_fetch from "./user_fetch_reducer";

export default combineReducers({
  auth,
  fetch,
  create_profile,
  nav,
  create_user,
  getApplicants,
  user_job_fetch
});
