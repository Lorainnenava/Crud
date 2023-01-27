import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { consumirApi } from "./Store";

export const Store= configureStore({
    reducer:{
        [consumirApi.reducerPath]: consumirApi.reducer,
    },

    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(consumirApi.middleware),
})

setupListeners(Store.dispatch);