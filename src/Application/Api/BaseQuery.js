import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const BaseQuery = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://kapable-backend.herokuapp.com/api/v1/'
    }),
    endpoints: (builder) => ({
        contact: builder.mutation({
            query: (arg) => ({
                url: "contact/new",
                method: "POST",
                body: arg,
            }),
        }),
        application: builder.mutation({
            query: (arg) => ({
                url: "application",
                method: "POST",
                body: arg,
            }),
        }),
        bookdemo: builder.mutation({
            query: (arg) => ({
                url: "demo",
                method: "POST",
                body: arg,
            }),
        }),
    }),
})
export const { useContactMutation, useApplicationMutation, useBookdemoMutation } = BaseQuery