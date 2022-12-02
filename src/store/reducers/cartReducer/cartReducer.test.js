import '@testing-library/jest-dom';

import reducer from ".";
import { addCart, removeCart, clearCart } from "../../actions/cartActions";

describe('cart reducer test', () => {
    const initialState = [3, 12, 19];

    it('should init reducer', () => {
        expect(reducer(undefined, {})).toEqual([]);
    });
    
    it('should trigger ADD_CART action', () => {
        const expectedState = [...initialState, 11];
        expect(reducer(initialState, addCart(11))).toEqual(expectedState);
    });
    
    it('should trigger REMOVE_CART action', () => {
        const expectedState = [12, 19];
        expect(reducer(initialState, removeCart(3))).toEqual(expectedState);
    });
    
    it('should trigger CLEAR_CART action', () => {
        const expectedState = [];
        expect(reducer(initialState, clearCart())).toEqual(expectedState);
    });
})