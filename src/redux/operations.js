import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL='https://64a1c3170079ce56e2db6137.mockapi.io'

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async () => {
        const response = await axios.get('/contacts')
        console.log(response.data)
        return await response.data
    }
)