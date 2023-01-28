import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const consumirApi = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({ baseUrl:'http://localhost:8025/'}),

    keepUnusedDataFor:3,
    refetchOnMountOrArgChange:true,
    refetchOnFocus:true,
    refetchOnReconnect:true,

    endpoints:(builder)=>({
        postMostrar: builder.mutation({
            query:(dataUser)=>({
                header:{'Content-Type': 'application/json'},
                method: 'POST',
                body:dataUser
            })
        }),
        getMostrar: builder.query({
            query:(data)=>({
                headers: {'Content-Type': 'application/json'},
                method: 'GET',
                body:data,
            })
        })
    })
    
})

export const {usePostMostrarMutation, useGetMostrarQuery} =consumirApi;