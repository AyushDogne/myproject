import { configureStore } from "@reduxjs/toolkit";
import Slice from '../Redux/Slice'

export const Store = configureStore({
    reducer:Slice
})