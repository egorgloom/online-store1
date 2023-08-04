import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from './../../utils/constants';



export const getCategories = createAsyncThunk(
    'categories/getCategories',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`${BASE_URL}/categories?limit=5`);
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
)


export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        list: [],
        isLoading: false
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCategories.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getCategories.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.list = payload
        })
        .addCase(getCategories.rejected, (state) => {
            state.isLoading = true
        })
    }
})

export default categoriesSlice.reducer;