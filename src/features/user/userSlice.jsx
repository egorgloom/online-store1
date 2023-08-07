import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        cart: [],
        isLoading: false
    },
    reducers: {
        addToCart: (state, { payload }) => {
            let newArrayCart = [...state.cart]
            const found = state.cart.find(({ id }) => id === payload.id);
            if (found) {
                newArrayCart = newArrayCart.map((item) => {
                    return item.id === payload.id ? { ...item, quantity: payload.quantity || item.quantity + 1 } :
                        item
                })
            } else {
                newArrayCart.push({ ...payload, quantity: 1 })
            }
            state.cart = newArrayCart
        },
        removeItem: (state, { payload }) => {
            state.cart = state.cart.filter(({ id }) => id !== payload)
        }
    }
})
export const { addToCart, removeItem } = userSlice.actions;
export default userSlice.reducer;