import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { loadState, saveState } from "../services/localStorageService"; 
import goodsReducer from "./reducers/goodsReducer";
import favoritesReducer from "./reducers/favoriteReducer";
import cartReducer from "./reducers/cartReducer";
import modalReducer from "./reducers/modalReducer";

const rootReducer = combineReducers({
    goods: goodsReducer,
    favorites: favoritesReducer,
    cart: cartReducer,
    modal: modalReducer,
});

const persistedState = loadState();

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunk)
);

const store = createStore(rootReducer, persistedState, composedEnhancer);
store.subscribe(() => {
    const currentState = store.getState();
    saveState(currentState);
});

export default store;