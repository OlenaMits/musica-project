import '@testing-library/jest-dom';

import reducer from ".";
import { setGoods } from "../../actions/goodsActions";

describe('goods reducer test', () => {
    it('should init reducer', () => {
        expect(reducer(undefined, [])).toEqual([]);
    });
    
    it('should trigger SET_GOODS action', () => {
        const payload = [
            {
                "title": "bass guitar",
                "price": 1200,
                "url": "./static/images/bassguitar.jpeg",
                "articul": 675366,
                "color": "brown"
            },
        ]
        const expectedState = [ 
            ...payload,
        ];
        expect(reducer([], setGoods(payload))).toEqual(expectedState);
    });
})