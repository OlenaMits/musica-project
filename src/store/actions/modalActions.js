import { OPEN_MODAL, CLOSE_MODAL } from "../../helpers/constants";

export const openModal = (payload) => ({
    type: OPEN_MODAL,
    payload
});

export const closeModal = (payload) => ({
    type: CLOSE_MODAL,
    payload
});
