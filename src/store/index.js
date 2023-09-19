import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersReducer } from "./slices/usersSlice";
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware)
  },
});

setupListeners(store.dispatch);

export { useFetchAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation, } from "./apis/albumsApi";
export { useFetchPhotosQuery, useAddPhotoMutation, useDeletePhotoMutation, } from "./apis/photosApi";

export * from './thunks/fetchUsers';
export * from './thunks/addUser';