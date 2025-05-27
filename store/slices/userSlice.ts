import { userInfoData } from '@/types';
import { IP_API_TOKEN, IP_API_URL } from '@env';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';




const initialState: userInfoData = {
    name: '',
    savedName: '',
    loading: false,
    ipInfo: undefined,
    deliverAddress:undefined
};


export const fetchIpInfo = createAsyncThunk(
    'useinfo/location',
    async () => {
        const response = await fetch(`${IP_API_URL}/json?token=${IP_API_TOKEN}`);
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
        },
        setAddress:(state, action) => {
            state.deliverAddress = action.payload
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

export const { setUserName, setUserSavedName , setAddress} = userSlice.actions




