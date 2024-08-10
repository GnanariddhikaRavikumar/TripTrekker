import { createSlice } from "@reduxjs/toolkit";
import { PACKAGES } from "../Packages";

const PackageSlice =createSlice({
    name:'package',
    initialState:{
        tour:PACKAGES
    },
    reducers:{
        findpackage:(state,action)=>{
            state.tour=PACKAGES.filter(trip=>
                trip.placename.includes(action.payload)
            )
        }
    }
});

export const {findpackage} =PackageSlice.actions;
export default PackageSlice.reducer;