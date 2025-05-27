import { CategoryState } from '@/types';
import { API_URL } from '@env';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCategory = createAsyncThunk(
    'category/fetchCategory',
    async () => {
        const response = await fetch(`${API_URL}/products/categories`);
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




