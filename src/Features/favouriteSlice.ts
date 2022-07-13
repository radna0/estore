import { createSlice ,PayloadAction} from "@reduxjs/toolkit";

interface FavouriteState {
  value: Favourite[]
}

interface Favourite{
   id: number;
   image: string;
   alt: string;
   name: string;
   price: number;
}

const initialState: FavouriteState = {
  value: [],
}
export const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
      addFavourite:(state, action: PayloadAction<Favourite>) =>{
        state.value.push(action.payload);
      },
      deleteFavourite:(state, action: PayloadAction<number>) => {

      const indexOfAction:number = state.value.findIndex(obj => {
         return obj.id === action.payload;
        });
        
        state.value.splice(indexOfAction, 1)
      }
    }
})


export const { addFavourite, deleteFavourite } = favouriteSlice.actions

export default favouriteSlice.reducer