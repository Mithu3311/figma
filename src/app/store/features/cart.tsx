import { Cart } from '@/app/utils/types'
import { createSlice } from '@reduxjs/toolkit'


// Define the initial state using that type
const initialState: Cart[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Add to Cart functionalty
    addToCart(state,action){
      const uuid = Math.floor(1000+Math.random()*9000);
      const newObj = {...action.payload,uuid};
      state.push(newObj);
    },
// Delete from cart
    delItem(state,{payload}){
      return state.filter((val)=>val.uuid!==payload)
    },
    // Addition of item
    addCart(state,action){
    const obj = state.find(
      (val) => 
      val.id == action.payload.id);
      if(obj) {
      ++obj.qty;
      const newState = state.filter((val)=>val.id !== obj?.id)
      state = [...newState, obj];
      return;
    }
  },

  // Subtraction of item
  subtractCart(state,action){
    const obj = state.find(
      (val) => val.id == action.payload.id);
    if (obj !== undefined){
      if(obj.qty<=1){
        return state.filter((val)=> val.uuid !== obj?.uuid)
      }
      --obj.qty;
      const newState = state.filter((val) => val.uuid == obj?.uuid);
      state = [...newState, obj]
      return;
  }
  },
}})

export const { addToCart, delItem, addCart, subtractCart } = cartSlice.actions


export default cartSlice.reducer