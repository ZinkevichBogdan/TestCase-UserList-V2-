import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../@types/IUser'



export const usersApi = createApi({

   reducerPath: 'usersApi',
   tagTypes: ['Users'],
   baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:3001/'
   }),

   endpoints: (build) => ({

      getUsers: build.query<IUser[], string>({
         query: () => `users`,

         providesTags: (result) =>
            result
               ? [
                  ...result.map(({ id }) => ({ type: 'Users' as const, id })),
                  { type: 'Users', id: 'LIST' },
               ]
               : [{ type: 'Users', id: 'LIST' }],
      }),

      addUser: build.mutation<IUser, IUser>({
         query: (body) => ({
            url: 'users',
            method: 'POST',
            body,
         }),

         invalidatesTags: [{
            type: 'Users', id: 'LIST'
         }]
      }),

      deleteUser: build.mutation<IUser, number>({
         query: (id) => ({
            url: `users/${id}`,
            method: 'DELETE'
         }),

         invalidatesTags: [{
            type: 'Users', id: 'LIST'
         }]
      }),

   })
});

export const { useGetUsersQuery, useAddUserMutation, useDeleteUserMutation } = usersApi