import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  //   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { carsReducer } from "./slice";

// const persistConfig = {
//   key: "auth",
//   version: 1,
//   storage,
//   whitelist: ["token"],
// };

const rootReducer = combineReducers({
  cars: carsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  //   devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
