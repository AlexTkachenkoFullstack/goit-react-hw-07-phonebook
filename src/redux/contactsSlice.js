import { createSlice } from '@reduxjs/toolkit'
import { fetchContacts } from './operations'

const initialState = {
    items: [],
    isLoading: false,
    error: null
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  // reducers: {
  //     addContact(state, action) { state.push(action.payload) },
  //     deleteContact(state, action){
  //      return state.filter(contact=> contact.id!==action.payload)
  //         }
  // },
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload
    })
  },
      }
)

