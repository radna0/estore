import { configureStore } from "@reduxjs/toolkit";
import searchTermReducer from "../Features/searchTermSlice";
import favouriteReducer from "../Features/favouriteSlice";
import purchaseReducer from "../Features/purchaseSlice";

export const store = configureStore({
    reducer: {
        searchTerm: searchTermReducer,
        favourite: favouriteReducer,
        purchase: purchaseReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch