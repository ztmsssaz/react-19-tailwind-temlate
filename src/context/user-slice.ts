//@ts-nocheck
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserData = {
   name: string
   id: string | number
   token: string
}

const localData: UserData | null = localStorage.getItem('userData')
   ? JSON.parse(localStorage.getItem('userData') as string)
   : null

const initialState: UserData = {
   name: localData ? localData.name : '',
   token: localData ? localData.token : '',
   id: localData ? localData.id : '',
}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      login(
         state: UserData,
         action: PayloadAction<{
            name: string
            token: string
            id: string | number
         }>
      ) {
         state = { ...action.payload }
         localStorage.setItem('userData', JSON.stringify(action.payload))
      },
      logout(state) {
         state.id = 0
         state.name = ''
         state.token = ''
         localStorage.removeItem('userData')
      },
   },
})

export const { login, logout } = userSlice.actions
