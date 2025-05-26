import { userInfoData } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';




const initialState: userInfoData = {
    name: '',
    savedName: '',
    loading: false,
    ipInfo: undefined
};


export const fetchIpInfo = createAsyncThunk(
    'useinfo/location',
    async () => {
        const response = await fetch(`https://ipinfo.io/json?token=ffc1c2b8ca5434`);
        const data = await response.json();
        return data;
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserName: (state, action) => {
            state.name = action.payload
        },
        setUserSavedName: (state, action) => {
            state.savedName = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchIpInfo.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchIpInfo.fulfilled, (state, action) => {
                state.ipInfo = action.payload;
                state.loading = false;
            })
            .addCase(fetchIpInfo.rejected, (state) => {
                state.loading = false;
            });
    }
});


export default userSlice.reducer;

export const { setUserName, setUserSavedName } = userSlice.actions




