import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from '../services/UserServices'
import setClassNameSlice from './slice/setClassName'


export const store = configureStore({
   reducer: {
      setClassName: setClassNameSlice,
      [usersApi.reducerPath]: usersApi.reducer
   },

   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch