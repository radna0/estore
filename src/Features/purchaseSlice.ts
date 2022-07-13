import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface PurchaseState {
  value: Purchase[]
}

interface Purchase{
   id: number;
   image: string;
   alt: string;
   name: string;
   price: number;
   quantity: number;
}

const initialState: PurchaseState = {
  value: [],
}
export const purchaseSlice = createSlice({
    name: 'purchase',
    initialState,
    reducers: {
      addPurchaseQuantity:(state,action: PayloadAction<number>) =>{
        state.value.map(val =>{
          if(val.id === action.payload){
            val.quantity +=1;
          }
        })
      },
      deletePurchaseQuantity:(state,action: PayloadAction<number>) =>{
        state.value.map(val =>{
          if(val.id === action.payload){
            val.quantity -=1;
          }
        })
      },
      addPurchase:(state, action: PayloadAction<Purchase>) =>{
        state.value.push(action.payload);
      },
      deletePurchase:(state, action: PayloadAction<number>) => {

      const indexOfAction:number = state.value.findIndex(obj => {
         return obj.id === action.payload;
        });

        state.value.splice(indexOfAction, 1)

      }
    }
})


export const { addPurchaseQuantity, deletePurchaseQuantity, addPurchase, deletePurchase } = purchaseSlice.actions

export default purchaseSlice.reducer