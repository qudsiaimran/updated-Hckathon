import { createSlice } from '@reduxjs/toolkit'
import {Cart} from '@/app/utilis/Types'

// Define the initial state using that type
const initialState: Cart[] = [];
export const CartSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
// add to cart

addtocart(state,action){
  let uuid = Math.floor(1000+Math.random()*9000) 
  let newobj = {...action.payload,uuid}
  state.push(newobj)

}

    },
 
})

export const { addtocart } = CartSlice.actions
export default CartSlice.reducer