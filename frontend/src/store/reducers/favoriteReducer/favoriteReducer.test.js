import '@testing-library/jest-dom';

import reducer from ".";
import { addFavorite, removeFavorite }from "../../actions/favoritesActions";

describe('favorite reducer test', () => {
    const initialState = [2, 13];

    it('should init reducer', () => {
        expect(reducer(undefined, {})).toEqual([]);
    });
    
    it('should trigger ADD_FAVORITE action', () => {
        const expectedState = [...initialState, 11];
        expect(reducer(initialState, addFavorite(11))).toEqual(expectedState);
    });
    
    it('should trigger REMOVE_FAVORITE action', () => {
        const expectedState = [13];
        expect(reducer(initialState, removeFavorite(2))).toEqual(expectedState);
    });
})