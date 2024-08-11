import { createSlice } from "@reduxjs/toolkit";
import { PACKAGES } from "../Packages";

const PackageSlice =createSlice({
    name:'category',
    initialState:{
        places:PACKAGES
    },
    reducers:{
        filtercategory:(state,action)=>{
            state.places=PACKAGES.filter(trip=>
                trip.category.includes(action.payload)
            )
        }
    }
});

export const {filtercategory} =PackageSlice.actions;
export default PackageSlice.reducer;