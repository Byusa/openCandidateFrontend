import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import logger from "redux-logger";
import { persistStore, autoRehydrate } from "redux-persist";
import { AsyncStorage } from "react-native";
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";

const middleware = [thunk, logger];

const store = createStore(
  reducers,
  {},
  compose(applyMiddleware(...middleware), autoRehydrate())
);

persistStore(store, {
  storage: AsyncStorage,
  whitelist: ["create_profile", "create_user"]
});

export default store;
