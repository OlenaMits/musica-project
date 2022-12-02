import { OPEN_MODAL, CLOSE_MODAL } from "../../../helpers/constants";

const initialState = {
    currentArticul: null,
    isOpened: false,
};

const reducer = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case OPEN_MODAL:
            return {
                isOpened: true,
                currentArticul: payload,
            }

        case CLOSE_MODAL:
            return {
                isOpened: false,
                currentArticul: null,
            };

        default:
            return state;
    }
};

export default reducer;