import { configureStore, combineReducers } from "@reduxjs/toolkit";

import commonSlice from "./slices/common";

const rootReducer = combineReducers({
  common: commonSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
