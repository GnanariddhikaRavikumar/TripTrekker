import { configureStore } from "@reduxjs/toolkit";
import PackageSlice from "./PackageSlice";

const Store = configureStore({
    reducer:{
        tour:PackageSlice,
    }
})

export default Store;