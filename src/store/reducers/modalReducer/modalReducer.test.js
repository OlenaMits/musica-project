import '@testing-library/jest-dom';

import reducer from ".";
import { openModal, closeModal }from "../../actions/modalActions";

describe('fav orite reducer test', () => {
    const initialState = {        
        currentArticul: 11,
        isOpened: false,
    };

    it('should init reducer', () => {
        expect(reducer(undefined, {})).toEqual({
            currentArticul: null,
            isOpened: false,
        });
    });
    
    it('should trigger OPEN_MODAL action', () => {
        const expectedState = {
            currentArticul: 2,
            isOpened: true,
        };
        expect(reducer(initialState, openModal(2))).toEqual(expectedState);
    });
    
    it('should trigger CLOSE_MODAL action', () => {
        const expectedState = {
            currentArticul: null,
            isOpened: false,
        };
        expect(reducer(initialState, closeModal(11))).toEqual(expectedState);
    });
})