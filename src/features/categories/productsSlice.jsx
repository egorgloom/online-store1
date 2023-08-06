

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from './../../utils/constants';



export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`${BASE_URL}/products`);
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
)


export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        filtered: [],
        isLoading: false
    },
    reducers: {
        filteredByPrice: (state, {payload}) => {
            state.filtered = state.list.filter(({price}) => price > payload)
        }
    },

    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getProducts.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.list = payload
        })
        .addCase(getProducts.rejected, (state) => {
            state.isLoading = true
        })
    }
})
export const {filteredByPrice} = productsSlice.actions
export default productsSlice.reducer;