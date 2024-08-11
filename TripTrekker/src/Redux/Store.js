import { configureStore } from "@reduxjs/toolkit";
import PackageSlice from "./PackageSlice";
import CategorySlice from "./CategorySlice";

const Store = configureStore({
    reducer:{
        package:PackageSlice,
        category:CategorySlice,
    }
})

export default Store;