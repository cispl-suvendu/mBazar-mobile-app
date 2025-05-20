import { CategoryState } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const fetchCategory = createAsyncThunk(
    'category/fetchCategory',
    async () => {
        const response = await fetch(`https://dummyjson.com/products/categories`);
        const data = await response.json();
        return data;
    }
);

const initialState: CategoryState = {
    allCategory: [],
    loading: false
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.allCategory = action.payload;
                state.loading = false;
            })
            .addCase(fetchCategory.rejected, (state) => {
                state.loading = false;
            });
    },
});


export default categorySlice.reducer;




