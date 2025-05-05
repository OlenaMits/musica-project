import { SET_GOODS } from "../../helpers/constants";
import { sendRequest } from "../../services";

export const setGoods = (payload) => ({
    type: SET_GOODS, 
    payload
});

export const getGoods = () => async dispatch => {
    // const response = await sendRequest("http://localhost:3000/static/goods.json");
    const response = await sendRequest("http://localhost:8080/products");
    dispatch(setGoods(response));
};