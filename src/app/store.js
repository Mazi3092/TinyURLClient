import {configureStore} from '@reduxjs/toolkit'
import linksSlice from '../features/links/LinksSlice'
import usersSlice from '../features/users/UsersSlice'

export const store = configureStore({
    reducer: {
        link: linksSlice,
        users: usersSlice,

        
    }
})