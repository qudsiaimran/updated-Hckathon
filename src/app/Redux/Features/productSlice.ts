import Products from '@/app/utilis/Mock';
import { IProduct } from '@/app/utilis/Types';
import { createSlice } from '@reduxjs/toolkit';



const initialState:IProduct[] = Products

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // Add reducers as needed
  },
});
export const {  } = ProductSlice.actions
export default ProductSlice.reducer;
