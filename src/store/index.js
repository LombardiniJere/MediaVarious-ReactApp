import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersReducer } from "./slices/usersSlice";
import { albumsApi } from "./apis/albumsApi";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
});

setupListeners(store.dispatch);

export { useFetchAlbumsQuery } from "./apis/albumsApi";
export * from './thunks/fetchUsers';
export * from './thunks/addUser';