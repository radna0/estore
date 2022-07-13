import { createSlice ,PayloadAction} from "@reduxjs/toolkit";
import Products from "../Data/Estore/Product.json"

interface SearchTermState {
  value: string
}



const initialState: SearchTermState = {
  value: "",
}
export const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState,
    reducers: {
      changeSearchTerm:(state, action: PayloadAction<string>) => {
        state.value = action.payload
    }
  }
})


export const {  changeSearchTerm } = searchTermSlice.actions

export default searchTermSlice.reducer