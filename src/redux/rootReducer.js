import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import netInfoSlice from "./slices/netInfoSlice";
import employeeSlice from "./slices/employeeSlice";
const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  netInfoReducer: netInfoSlice,
  employeeReducer: employeeSlice,
});
const persistedRootReducer = persistReducer(persistConfig, rootReducer);
export default persistedRootReducer;
