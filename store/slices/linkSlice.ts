import { createSlice } from '@reduxjs/toolkit';

interface LinkState {
    currentLink: string,
    prevLink: string
}

const initialState: LinkState = {
    currentLink: '',
    prevLink: '',
};

const linkSlice = createSlice({
    name: 'allLinks',
    initialState,
    reducers: {
        setPreviousLink: (state) => {
            const link = state.currentLink === '' ? '/' : state.currentLink
            state.prevLink = link
        },
        setCurrentLink: (state, action) => {
            state.currentLink = action.payload
        }
    },
});


export default linkSlice.reducer;
export const { setCurrentLink, setPreviousLink } = linkSlice.actions




