import { configureStore } from '@reduxjs/toolkit'
import ProductSlice  from './Features/productSlice'
import  CartSlice  from './Features/cartSlice'


export const Store = configureStore({
  reducer: {
   product:ProductSlice,
   Cart:CartSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch