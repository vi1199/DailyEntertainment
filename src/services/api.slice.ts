import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
  endpoints: builder => ({
    getTodos: builder.query({
      query: () => '/todos/1',
    }),
  }),
});

export const {useGetTodosQuery} = apiSlice;
