import { configureStore } from '@reduxjs/toolkit';
import  CharacterSlice  from './charactersSlice';

export default configureStore ({
    reducer: {
        characters: CharacterSlice
    }
});
