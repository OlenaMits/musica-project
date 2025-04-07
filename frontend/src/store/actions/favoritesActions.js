import { ADD_FAVORITE,REMOVE_FAVORITE } from "../../helpers/constants";

/**
 * 
 * @param {string} payload 
 */
export const addFavorite = (payload) => ({
    type: ADD_FAVORITE, 
    payload
});

/**
 * 
 * @param {string} payload 
 */
export const removeFavorite = (payload) => ({
    type: REMOVE_FAVORITE,
    payload
});
