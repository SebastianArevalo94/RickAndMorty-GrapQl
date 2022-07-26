import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    character: {},
    history : []
};

export const CharacterSlice = createSlice({
    name: "characters",
    initialState,
    reducers:{
        addNew: (state, action) => {
            state.history.push(action.payload)
        },
        setView : (state, action) => {
            state.character = action.payload
        }
    }
});

export const { addNew, setView } = CharacterSlice.actions;

export default CharacterSlice.reducer;