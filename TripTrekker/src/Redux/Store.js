import { configureStore } from "@reduxjs/toolkit";
import PackageSlice from "./PackageSlice";

const Store = configureStore({
    reducer:{
        package:PackageSlice,
    }
})

export default Store;